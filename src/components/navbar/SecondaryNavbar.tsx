import { Link, useLocation } from "react-router-dom"

import './SecondaryNavbar.css'
import {SmirnaNavigationDropdownsInterface} from "../../interfaces/SmirnaNavigationInterface"
import { useEffect, useRef } from "react"

interface SecondaryNavbarProps extends React.HTMLAttributes<HTMLElement>{
  data: SmirnaNavigationDropdownsInterface[]
}

const SecondaryNavbar = ({data,className,...props}:SecondaryNavbarProps)=>{

  // REF
  const navRef:React.RefObject<HTMLElement> = useRef(null)

  // LOCATION
  const location = useLocation()

  useEffect(()=>{
    const handleResize = ()=>{
      if(navRef.current){
        if(window.innerWidth < navRef.current!.offsetWidth+200){
          navRef.current.classList.add('mobile-active')
        }else{
          navRef.current.classList.remove('mobile-active')
        }
      }
    }

    window.addEventListener('resize',handleResize)

    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])

  return (
    <nav ref={navRef} className={`secondary-navbar${className ? ' '+className:''}`} {...props}>
      <ul className="secondary-navbar-links">
        {data.map((val,i)=>{
          const isActive = val.url === location.pathname

          return (
            <li key={i} className='secondary-navbar-links-item'>
              <Link to={val.url} className={`secondary-navbar-link${isActive ? ' active':''}`}>
                {val.page}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SecondaryNavbar