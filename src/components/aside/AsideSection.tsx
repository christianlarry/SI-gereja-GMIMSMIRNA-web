interface AsideSectionProps extends React.HTMLAttributes<HTMLElement>{
  children: React.ReactNode
}

const AsideSection = ({children,className,...props}:AsideSectionProps)=>(
  <section className={`aside-section${className ? ' '+className:''}`} {...props}>
    {children}
  </section>
)

export default AsideSection