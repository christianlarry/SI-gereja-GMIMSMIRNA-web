import { useState,useEffect,useRef } from 'react'
import './HeaderSearchBox.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faXmarkCircle} from '@fortawesome/free-regular-svg-icons'

interface HeaderSearchBoxProps{
	openButtonRef:React.RefObject<HTMLElement>
	style?:React.CSSProperties
}

const HeaderSearchBox = ({openButtonRef,style}:HeaderSearchBoxProps) => {

	// STATE
	const [isActive, setIsActive] = useState(false)

	// REF
	const searchInputRef:React.RefObject<HTMLInputElement> = useRef(null)
	
	const handleCloseSearchBox = ()=>{
		setIsActive(false)
		if(searchInputRef.current) searchInputRef.current.value = ''
	}
	
	useEffect(()=>{
		if(openButtonRef){
			openButtonRef.current?.addEventListener('click',()=>setIsActive(true))
		}
	},[])

	return (
		<div className={`header-search-box${isActive ? ' active' : ''}`} style={style && style}>
			<form className="header-search-form">
				<input type="text" name="s" id="s" placeholder="Cari disini..." className='header-search-input' ref={searchInputRef}/>
				<div className="btn-wrapper">
					<button type="button" name="search">
						<i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
					</button>
					<button type="button" className="header-search-close-btn" onClick={handleCloseSearchBox}>
						<i><FontAwesomeIcon icon={faXmarkCircle}/></i>
					</button>
				</div>
			</form>
		</div>
	)
}

export default HeaderSearchBox