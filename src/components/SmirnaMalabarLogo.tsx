import './SmirnaMalabarLogo.css'

const SmirnaMalabarLogo = ({className}:{className?:string}) => {
  return (
    <div className={`smirna-malabar-logo${className ? ' '+className:''}`}>
      <a href="/">
        <img src="/images/gmim-large.png" alt="logo gmim" />
        <h1>SMIRNA<span>MALABAR</span></h1>
      </a>
    </div>
  )
}

export default SmirnaMalabarLogo