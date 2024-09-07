import './UnderlineTextButton.css'

interface UnderlineTextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children:React.ReactElement
}

const UnderlineTextButton = ({children,...props}:UnderlineTextButtonProps)=>{
  return (
    <button className="underline-text-button" {...props}>{children}
    </button>
  )
}

export default UnderlineTextButton