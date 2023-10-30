import './SectionTitle.css'

interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement>{
  text:string
}

const SectionTitle = ({text,...props}:SectionTitleProps)=>(
  <h2 className="section-title" {...props}>{text}</h2>
)

export default SectionTitle