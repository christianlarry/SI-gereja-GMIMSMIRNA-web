import './Topbar.css'
import HeaderSearchBox from './HeaderSearchBox'
import { forwardRef, useRef } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faLocationDot,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Topbar = forwardRef<HTMLDivElement>(({},ref) => {

	// REF
	const topbarSearchBtnRef:React.RefObject<HTMLElement> = useRef(null)

	const headerSearchBoxHeight = '51px'

	return (
		<div className="topbar" ref={ref}>
			<div className="container topbar-wrapper">
				<div className="topbar-address">
					<i><FontAwesomeIcon icon={faLocationDot}/></i>
					<a href="https://goo.gl/maps/obAVQSvWxzJAjAMb9" target="_blank">Jl. Kokima, Malalayang Dua, Kota Manado, Indonesia</a>
				</div>
				<div className="topbar-social">
					<ul className="topbar-social-links h-full">
						<li>
							<a href="https://www.facebook.com/groups/170536833353382/" target="_blank">
								<i className="transition-fast"><FontAwesomeIcon icon={faFacebook}/></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/gmim_smirna_malalayang/" target="_blank">
								<i className="transition-fast"><FontAwesomeIcon icon={faInstagram}/></i>
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/@smirnamalabar" target="_blank">
								<i className="transition-fast"><FontAwesomeIcon icon={faYoutube}/></i>
							</a>
						</li>
						<li>
							<a href="mailto:malabar.smirna@gmail.com" target="_blank">
								<i className="transition-fast"><FontAwesomeIcon icon={faEnvelope}/></i>
							</a>
						</li>
					</ul>
					<div className="topbar-search">
						<button className="topbar-search-btn" ref={topbarSearchBtnRef as React.RefObject<HTMLButtonElement>}>
							<i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
						</button>
						<HeaderSearchBox openButtonRef={topbarSearchBtnRef} style={{height: headerSearchBoxHeight}}/>
					</div>
				</div>
			</div>
		</div>
	)
})

export default Topbar