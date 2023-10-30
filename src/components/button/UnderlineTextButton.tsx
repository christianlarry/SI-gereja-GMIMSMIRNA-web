import './UnderlineTextButton.css'

interface UnderlineTextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text:string
}

const UnderlineTextButton = ({text,...props}:UnderlineTextButtonProps)=>{
  return (
    <button className="underline-text-button" {...props}>{text}
    </button>
  )
}

export default UnderlineTextButton