import { MouseEvent } from 'react'
import './BurgerButton.css'

interface BurgerButtonProps{
	onClick?:(e:MouseEvent,state:Boolean)=>void
}

const BurgerButton = ({onClick}:BurgerButtonProps) => {

	let active:Boolean = false
	const handleBurgerBtnClick = (e:MouseEvent)=>{
		active = !active
		if(active){
			e.currentTarget.classList.add('active')
		}else{
			e.currentTarget.classList.remove('active')
		}
		onClick && onClick(e,active)
	}

	return (
		<div className="burger-btn" onClick={handleBurgerBtnClick}>
			<span className="burger-btn-line"></span>
			<span className="burger-btn-line"></span>
			<span className="burger-btn-line"></span>
		</div>
	)
}

export default BurgerButton