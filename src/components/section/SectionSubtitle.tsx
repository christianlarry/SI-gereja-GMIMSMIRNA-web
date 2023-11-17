import './SectionSubtitle.css'

interface SectionSubtitleProps extends React.HTMLAttributes<HTMLSpanElement>{
  text:string
}

const SectionSubtitle = ({text,className,...props}:SectionSubtitleProps)=>(
  <span className={`section-subtitle${className?' '+className:''}`} {...props}>{text}</span>
)

export default SectionSubtitle