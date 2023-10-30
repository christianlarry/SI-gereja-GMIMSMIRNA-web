import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?:React.ReactElement
}

const Button = ({children,className,...props}:ButtonProps)=>{
  return (
    <button className={`button-primary${className ? ' '+className : ''}`} {...props}>
      {children}
    </button>
  )
}

export default Button