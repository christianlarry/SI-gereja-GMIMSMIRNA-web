import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {lazy} from 'react'

// PAGES/COMPONENTS/LAYOUT
const Beranda = lazy(()=>import('./pages/Beranda'))
const TentangGereja = lazy(()=>import('./pages/TentangGereja'))
const SejarahGereja = lazy(()=>import('./pages/SejarahGereja'))
const DataJemaat = lazy(()=>import('./pages/DataJemaat'))
const PerangkatPelayanan = lazy(()=>import('./pages/PerangkatPelayanan'))
const PP_PenasihatBpmj = lazy(()=>import('./pages/PerangkatPelayanan/PenasihatBpmj'))
const PP_Bpmj = lazy(()=>import('./pages/PerangkatPelayanan/Bpmj'))
const PP_Kolom = lazy(()=>import('./pages/PerangkatPelayanan/Kolom'))
const PP_Kompelka = lazy(()=>import('./pages/PerangkatPelayanan/Kompelka'))
const PP_KomisiKerja = lazy(()=>import('./pages/PerangkatPelayanan/KomisiKerja'))
const PP_RayonPemudaAnak = lazy(()=>import('./pages/PerangkatPelayanan/RayonPemudaAnak'))

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
						<Route path='tentang-gereja' element={<TentangGereja/>}/>
						<Route path='sejarah-gereja' element={<SejarahGereja/>}/>
						<Route path='perangkat-pelayanan' element={<PerangkatPelayanan/>}>
							<Route path='penasihat-bpmj' element={<PP_PenasihatBpmj/>}/>
							<Route path='bpmj' element={<PP_Bpmj/>}/>
							<Route path='kolom' element={<PP_Kolom/>}/>
							<Route path='kompelka' element={<PP_Kompelka/>}/>
							<Route path='komisi-kerja' element={<PP_KomisiKerja/>}/>
							<Route path='rayon-pemuda-remaja-anak' element={<PP_RayonPemudaAnak/>}/>
						</Route>
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
