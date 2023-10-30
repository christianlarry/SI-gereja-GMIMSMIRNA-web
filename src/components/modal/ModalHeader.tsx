import './ModalHeader.css'

interface ModalHeaderProps{
  children:React.ReactNode
  className?:string | null
  style?:React.CSSProperties
}

const ModalHeader = ({children,className,style}:ModalHeaderProps)=>{
  return (
    <div className={`modal-header${className ? ' '+className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default ModalHeader