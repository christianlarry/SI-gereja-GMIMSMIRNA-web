import './SmirnaMalabarLogo.css'

interface Props{
  className?:string
  /**
   * default true
   */
  dark?:boolean
}

const SmirnaMalabarLogo = ({
  className,
  dark
}:Props) => {
  return (
    <div className={`smirna-malabar-logo${className ? ' '+className:''}`} data-dark={dark}>
      <a href="/">
        <img src="/images/gmim-large.png" alt="logo gmim" />
        <h1>SMIRNA<span>MALABAR</span></h1>
      </a>
    </div>
  )
}

export default SmirnaMalabarLogo