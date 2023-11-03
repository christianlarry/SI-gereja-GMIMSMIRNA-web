import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {lazy} from 'react'

// PAGES/COMPONENTS/LAYOUT
const Beranda = lazy(()=>import('./pages/Beranda'))
const ProfilGereja = lazy(()=>import('./pages/ProfilGereja'))
const PerangkatPelayanan = lazy(()=>import('./pages/PerangkatPelayanan'))
const DataJemaat = lazy(()=>import('./pages/DataJemaat'))

import LayoutContainer from './components/layouts/LayoutContainer'
import LayoutBeranda from './components/layouts/LayoutBeranda'
import LayoutMain from './components/layouts/LayoutMain'

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
				<Route path='/' element={<LayoutContainer/>}>
					<Route element={<LayoutBeranda/>}>
						<Route index element={<Beranda/>}/>
					</Route>
					<Route element={<LayoutMain/>}>
						<Route path='profil-gereja' element={<ProfilGereja text='Profil Gereja'/>}/>
						<Route path='perangkat-pelayanan' element={<PerangkatPelayanan text='Perangkat Pelayanan'/>}/>
						<Route path='data-jemaat' element={<DataJemaat text='Data Jemaat'/>}/>
					</Route>
				</Route>
				<Route path='/beranda' element={<Navigate to={'/'}/>}/>
				<Route path='/*' element={<h1>Not Found Page</h1>}/>
			</Routes>
		</Router>
		)
}

export default App
