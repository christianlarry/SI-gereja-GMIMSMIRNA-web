interface AsideTitleProps extends React.HTMLAttributes<HTMLHeadingElement>{
  text:string
}

const AsideTitle = ({text,className}:AsideTitleProps)=><h3 className={`aside-title${className ? ' '+className:''}`}>{text}</h3>

export default AsideTitle