import { MouseEvent, useState } from 'react'
import './NavItem.css'
import { Link } from 'react-router-dom'

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
      {data.url && 
        <Link to={data.url}>
          {data.page}
          {data.dropdowns && <span className={isDropdownToggle ? 'active' : undefined} onClick={handleDropdownMenusToggle}>+</span>}
        </Link>
      }{!data.url &&
        <a style={{pointerEvents: 'none'}}>
          {data.page}
          {data.dropdowns && <span className={isDropdownToggle ? 'active' : undefined} onClick={handleDropdownMenusToggle}>+</span>}
        </a>
      }

      {data.dropdowns && 
      <ul className={`nav-dropdown-menus${data.dropdownRight ? ' dropdown-to-right' : ''}${isDropdownToggle ? ' active':''}`}>
        {data.dropdowns.map((value,i)=>(
          <li className="nav-dropdown-items" key={i}><Link to={value.url}>{value.page}</Link></li>
        ))}
      </ul>
      }
    </li>
  )
}

export default NavItem