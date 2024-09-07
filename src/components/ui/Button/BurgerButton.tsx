import './BurgerButton.css'

interface BurgerButtonProps{
	active:boolean
	onClick:React.MouseEventHandler<HTMLDivElement>
}

const BurgerButton = ({active,onClick}:BurgerButtonProps) => {
	return (
		<div className={`burger-btn${active?' active':''}`} onClick={onClick}>
			<span className="burger-btn-line"></span>
			<span className="burger-btn-line"></span>
			<span className="burger-btn-line"></span>
		</div>
	)
}

export default BurgerButton