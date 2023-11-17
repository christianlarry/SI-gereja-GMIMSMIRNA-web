import './AsideLinkLists.css'

interface AsideLinkListsProps extends React.HTMLAttributes<HTMLUListElement>{
  children:React.ReactNode
}

const AsideLinkLists = ({children,className,...props}:AsideLinkListsProps)=>(
  <ul className={`aside-link-lists${className?' '+className:''}`} {...props}>
    {children}
  </ul>
)
export default AsideLinkLists

interface AsideLinkListsItemProps extends React.HTMLAttributes<HTMLLIElement>{
  children:React.ReactElement
}

export const AsideLinkListsItem = ({children,className,...props}:AsideLinkListsItemProps)=>(
  <li className={`aside-link-lists-item${className?' '+className:''}`} {...props}>
    {children}
  </li>
)