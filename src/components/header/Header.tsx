import { useEffect, useRef, useState } from 'react'
import './Header.css'
import Navbar from './Navbar'
import Topbar from './Topbar'

const Header = ({beranda}:{beranda?:boolean}) => {
	// REF
	const navbarRef:React.RefObject<HTMLElement> = useRef(null)
	const topbarRef:React.RefObject<HTMLDivElement> = useRef(null)

	// STATE
	const [navbarHeight,setNavbarHeight] = useState<number | null>(null)
	const [isSticky,setIsSticky] = useState(false)

	// EFFECT
	useEffect(()=>{
		if(navbarRef.current) setNavbarHeight(navbarRef.current.offsetHeight)//setNavbarHeight(navbarRef.current.style.height)
		const handleScroll = ()=>{
			if(beranda && topbarRef.current){
				if(window.scrollY >= topbarRef.current.offsetHeight) return setIsSticky(true)
				setIsSticky(false)
			}
		}

		window.addEventListener('scroll',handleScroll)
		return ()=>{
			window.removeEventListener('scroll',handleScroll)
		}
	},[])

	return (
		<div className='header-wrapper'>
			<header>
				{beranda && <Topbar ref={topbarRef}/>}
				<Navbar beranda={beranda} ref={navbarRef} isSticky={isSticky}/>
			</header>
			{!beranda && <div style={navbarHeight ? {height:navbarHeight} : undefined}></div>}
		</div>
	)
}

export default Header