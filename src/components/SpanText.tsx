import './SpanText.css'

interface Props extends React.HTMLAttributes<HTMLSpanElement>{
  text: string
  /**
   * default lg
   */
  size?: 'lg'|'md'|'sm'
}

const SpanText = ({text,size='lg',className,...props}:Props)=>(
  <span 
  className={`span-text${className?' '+className:''}`} 
  {...props}
  data-size={size}
  >{text}</span>
)

export default SpanText