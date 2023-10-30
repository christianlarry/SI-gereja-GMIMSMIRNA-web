import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {lazy} from 'react'

// PAGES/COMPONENTS
const Beranda = lazy(()=>import('./pages/Beranda'))

// STYLES
import './styles/smirnaVariable.css'
import './styles/main.css'

// SWIPERJS STYLES
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/beranda' element={<Beranda />}/>
				<Route path='/*' element={<Navigate to={'/beranda'}/>}/>
			</Routes>
		</Router>
		)
}

export default App
