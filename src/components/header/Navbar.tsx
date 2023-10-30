import {MouseEvent, useState, useRef, forwardRef} from 'react'
import BurgerButton from '../button/BurgerButton'
import './Navbar.css'
import HeaderSearchBox from './HeaderSearchBox'
import navigationLinks from '../../data/smirnaNavigationLink.json'
import NavItem from './NavItem'
import SmirnaMalabarLogo from '../SmirnaMalabarLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = forwardRef<HTMLElement,{beranda?:boolean,isSticky:boolean}>(({beranda,isSticky},ref) => {
	// STATE
	const [isBurgerMenuActive, setisBurgerMenuActive] = useState<Boolean>(false)

	// REF
	const navSearchBtnRef:React.RefObject<HTMLElement> = useRef(null)

	const handleBurgerBtnClick = (_e:MouseEvent,state:Boolean)=>{
		setisBurgerMenuActive(state)
	}

	return (
		<nav className={`navbar${!beranda ? ' main-navbar sticky' :''}${isSticky ? ' sticky':''}`} ref={ref}>
			<div className="container nav-wrapper">

				<BurgerButton onClick={handleBurgerBtnClick}/>

				<SmirnaMalabarLogo className='nav-logo'/>

				<ul className={`nav-links h-full ${isBurgerMenuActive && 'active'}`}>

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