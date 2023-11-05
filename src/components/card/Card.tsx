import './card.css'

interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
  children:React.ReactNode
}

const Card = ({children,style,className,...props}:CardProps)=>(
  <div className={`main-card-container${className ? ' '+className:''}`} style={style} {...props}>
    {children}
  </div>
)

export default Card