import './SectionTitle.css'

interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement>{
  text:string
}

const SectionTitle = ({text,className,...props}:SectionTitleProps)=>(
  <h2 className={`section-title${className ? ' '+className:''}`} {...props}>{text}</h2>
)

export default SectionTitle