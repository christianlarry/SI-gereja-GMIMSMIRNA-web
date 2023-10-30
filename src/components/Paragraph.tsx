import './Paragraph.css'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>{
  text:string
  /**
   * Paragraph color, Default gray
   */
  color?:'white' | 'black' | 'gray' | 'dark-gray'
}

const Paragraph = ({text,color,...props}:ParagraphProps)=>{

  if(!color) color = 'gray'

  return <p className={`paragraph paragraph-${color}`} {...props}>{text}</p>
}

export default Paragraph