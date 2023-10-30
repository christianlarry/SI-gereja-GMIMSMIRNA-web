import './SectionTitleSep.css'

const SectionTitleSep = ({className,...props}:React.HTMLAttributes<HTMLParagraphElement>)=> <span className={`section-title-sep${className ? ' '+className : ''}`} {...props}></span>

export default SectionTitleSep