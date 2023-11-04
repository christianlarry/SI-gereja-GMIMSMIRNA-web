import './SectionSubtitle.css'

interface SectionSubtitleProps extends React.HTMLAttributes<HTMLSpanElement>{
  text:string
}

const SectionSubtitle = ({text,...props}:SectionSubtitleProps)=>(
  <span className="section-subtitle" {...props}>{text}</span>
)

export default SectionSubtitle