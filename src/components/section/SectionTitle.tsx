import './SectionTitle.css'

interface SectionTitleProps extends React.HTMLAttributes<HTMLParagraphElement>{
  text:string
  /**
   * default lg
   */
  size:'lg'|'md'|'sm'
}

const SectionTitle = ({text,size='lg',className,...props}:SectionTitleProps)=>(
  <h2 
  className={`section-title${className ? ' '+className:''}`}
  data-size={size}
  {...props}>{text}</h2>
)

export default SectionTitle