import './LabelInput.css'

interface LabelInputProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text:string
  inputRef:React.RefObject<HTMLInputElement | HTMLTextAreaElement> 
}

const LabelInput = ({
  text,
  inputRef,
  className,
  onClick,
  ...props
}:LabelInputProps)=>{
  
  const handleLabelClick = (e:React.MouseEvent<HTMLLabelElement>)=>{
    if(inputRef.current) inputRef.current.focus()
    onClick && onClick(e)
  }
  
  return (
    <label 
    className={`input-label${className?' '+className:''}`}
    onClick={handleLabelClick}
    {...props}>
      {text}
    </label>
  )
}

export default LabelInput