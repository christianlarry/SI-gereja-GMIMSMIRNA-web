import './Aside.css'

interface AsideProps extends React.HTMLAttributes<HTMLElement>{
  children: React.ReactNode
}

const Aside = ({children,className,...props}:AsideProps)=>{
  return (
    <aside className={`aside-container${className ? ' '+className:''}`} {...props}>
      <div className="aside-wrapper">
        {children}
      </div>
    </aside>
  )
}

export default Aside