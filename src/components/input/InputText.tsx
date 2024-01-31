import { useRef } from 'react'
import './InputText.css'
import LabelInput from './LabelInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?:string
  type: 'text'|'email'|'password'|'search'
  onSearch?: (inputValue:string)=>void
  inputRef?: React.RefObject<HTMLInputElement>
}

const InputText = ({
  label,
  type,
  onSearch,
  inputRef,
  ...props}:InputTextProps)=>{

  const childInputRef:React.RefObject<HTMLInputElement> = inputRef || useRef(null)

  const handleSearchClick = ()=>{
    (onSearch && childInputRef.current && type === 'search') && onSearch(childInputRef.current.value)
  }

  const handleInputKeydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === 'Enter' && type === 'search') handleSearchClick()
  }

  return (
    <div className='input-text-container'>
      {label && 
      <LabelInput text={label} inputRef={childInputRef}>
        {label}
      </LabelInput>}
      <div className='input-text-wrap'>
        <input className='input-text' ref={childInputRef} type={type} {...props} onKeyDown={handleInputKeydown} />
        
        {type === 'search' &&
        <button onClick={handleSearchClick} className='input-search-btn'>
          <i><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></i>
        </button>
        }
      </div>
    </div>
  )
}

export default InputText