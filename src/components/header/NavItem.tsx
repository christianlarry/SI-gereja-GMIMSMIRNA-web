import { MouseEvent, useState } from 'react'
import './NavItem.css'

interface NavItemProps{
  data: {
    page: string,
    url: string | null,
    dropdowns: {
      page: string,
      url: string
    }[] | null,
    dropdownRight?: boolean
  }
}

const NavItem = ({data}:NavItemProps) => {

  const [isDropdownToggle,setIsDropdownToggle] = useState<boolean>(false)

  const handleDropdownMenusToggle = (e:MouseEvent)=>{
    if(data.dropdowns && window.innerWidth <= 1025){
      e.preventDefault()
      setIsDropdownToggle(!isDropdownToggle)
    }
  }

  return (
    <li className="nav-list-items" tabIndex={data.dropdowns ? 0 : undefined}>
      <a href={data.url ? data.url : undefined}>{data.page}{data.dropdowns && <span className={isDropdownToggle ? 'active' : undefined} onClick={handleDropdownMenusToggle}>+</span>}</a>
      {data.dropdowns && 
      <ul className={`nav-dropdown-menus${data.dropdownRight ? ' dropdown-to-right' : ''}${isDropdownToggle ? ' active':''}`}>
        {data.dropdowns.map((value,i)=>(
          <li className="nav-dropdown-items" key={i}><a href={value.url}>{value.page}</a></li>
        ))}
      </ul>
      }
    </li>
  )
}

export default NavItem