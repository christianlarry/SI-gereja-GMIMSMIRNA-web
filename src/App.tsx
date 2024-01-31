import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {lazy} from 'react'

// PAGES/COMPONENTS
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
const Berita = lazy(()=>import('./pages/Berita'))
const DetailBerita = lazy(()=>import('./pages/Berita/DetailBerita'))

// ERROR PAGE
const NotFoundPage = lazy(()=>import('./pages/ErrorPages/NotFoundPage'))

// LAYOUT
import LayoutContainer from './components/layouts/LayoutContainer'
import LayoutBeranda from './components/layouts/pageLayouts/LayoutBeranda'
import LayoutMain from './components/layouts/LayoutMain'
// LAZY LAYOUT
const LayoutPerangkatPelayanan = lazy(()=>import('./components/layouts/pageLayouts/LayoutPerangkatPelayanan'))
const LayoutBerita = lazy(()=>import('./components/layouts/pageLayouts/LayoutBerita'))

// STYLES
import './styles/smirnaVariable.css'
import './styles/main.css'

// SWIPERJS STYLES
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

// REACT TOASTIFY STYLES
import 'react-toastify/ReactToastify.min.css'

// CHARTJS GLOBAL CONFIG
import Chart from 'chart.js/auto'
import {defaults,CategoryScale} from 'chart.js'

Chart.register(CategoryScale)
defaults.maintainAspectRatio = false
defaults.responsive = true

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
						<Route path='perangkat-pelayanan' element={<LayoutPerangkatPelayanan/>}>
							<Route path='' element={<PerangkatPelayanan/>}/>
							<Route path='penasihat-bpmj' element={<PP_PenasihatBpmj/>}/>
							<Route path='bpmj' element={<PP_Bpmj/>}/>
							<Route path='kolom' element={<PP_Kolom/>}/>
							<Route path='kompelka' element={<PP_Kompelka/>}/>
							<Route path='komisi-kerja' element={<PP_KomisiKerja/>}/>
							<Route path='rayon-pemuda-remaja-anak' element={<PP_RayonPemudaAnak/>}/>
						</Route>
						<Route path='data-jemaat' element={<DataJemaat/>}/>
						<Route path='berita' element={<LayoutBerita/>}>
							<Route path='' element={<Berita/>}/>
							<Route path=':id' element={<DetailBerita/>}/>
						</Route>
						
						<Route path='/*' element={<NotFoundPage />}/>
					</Route>
				</Route>
				<Route path='/beranda' element={<Navigate to={'/'}/>}/>
			</Routes>
		</Router>
		)
}

export default App
