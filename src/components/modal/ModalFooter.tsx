import './ModalFooter.css'

interface ModalFooterProps{
  children:React.ReactNode
  className?:string | null
  style?:React.CSSProperties
}

const ModalFooter = ({children,className,style}:ModalFooterProps)=>{
  return (
    <div className={`modal-footer${className ? ' '+className : ''}`} style={style}>
      {children}
    </div>
  )
}

export default ModalFooter