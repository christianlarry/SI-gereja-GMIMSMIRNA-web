import { useRef } from 'react'
import LabelInput from './LabelInput'
import './TextArea.css'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  label?:string
  inputRef?: React.RefObject<HTMLTextAreaElement>
}

const TextArea = ({
  label,
  inputRef,
  ...props
}:Props)=>{

  const childInputRef:React.RefObject<HTMLTextAreaElement> = inputRef || useRef(null)

  return (
    <div className='textarea-wrapper'>
      {label &&
        <LabelInput text={label} inputRef={childInputRef}>
        {label}
        </LabelInput>
      }
      <textarea ref={childInputRef} className='textarea' {...props}/>
    </div>
  )
}

export default TextArea