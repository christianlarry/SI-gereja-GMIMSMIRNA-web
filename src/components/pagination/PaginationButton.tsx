import './PaginationButton.css'

interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children:React.ReactNode
  active?:boolean
}

const PaginationButton = (
  {
    children,
    active = false,
    ...props
  }:PaginationButtonProps
)=>{
  return <button className={`pagination-btn${active ? ' active':''}`} {...props}>{children}</button>
}

export default PaginationButton