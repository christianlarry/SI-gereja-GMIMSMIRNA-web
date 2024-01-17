import {useState, useRef, forwardRef, useEffect} from 'react'
import BurgerButton from '../button/BurgerButton'
import './Navbar.css'
import HeaderSearchBox from './HeaderSearchBox'
import navigationLinks from '../../data/smirnaNavigationLink.json'
import NavItem from './NavItem'
import SmirnaMalabarLogo from '../SmirnaMalabarLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

const Navbar = forwardRef<HTMLElement,{beranda?:boolean,isSticky:boolean}>(({beranda,isSticky},ref) => {

	const location = useLocation()

	// STATE
	const [isBurgerMenuActive, setisBurgerMenuActive] = useState<boolean>(false)

	// REF
	const navSearchBtnRef:React.RefObject<HTMLElement> = useRef(null)

	// EFFECT
	useEffect(()=>{
		if(isBurgerMenuActive) return document.body.classList.add('overflow-h')
		document.body.classList.remove('overflow-h')
	},[isBurgerMenuActive])

	useEffect(()=>{
		setisBurgerMenuActive(false)
	},[location])

	return (
		<nav className={`navbar${!beranda ? ' main-navbar sticky' :''}${isSticky ? ' sticky':''}`} ref={ref}>
			<div className="container nav-wrapper">

				<BurgerButton active={isBurgerMenuActive} onClick={()=>setisBurgerMenuActive(!isBurgerMenuActive)}/>

				<SmirnaMalabarLogo className='nav-logo'/>

				<ul className={`nav-links h-full ${isBurgerMenuActive ? 'active':''}`}>

					{navigationLinks.map((value,i)=> <NavItem data={value} key={i}/>)}

				</ul>

				<div className='nav-search-box'>
					<div className="nav-search-btn">
						<button ref={navSearchBtnRef as React.RefObject<HTMLButtonElement>}>
							<i><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></i>
						</button>
					</div>
					<HeaderSearchBox openButtonRef={navSearchBtnRef}/>
				</div>

			</div>
		</nav>
	)
})

export default Navbar