import './ModalContent.css'

interface ModalContentProps{
  children:React.ReactNode
  className?:string | null
  style?:React.CSSProperties
}

const ModalContent = ({children,className,style}:ModalContentProps)=>{
  return (
    <div className={`modal-content${className ? ' '+className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default ModalContent