// STYLES
import './styles/global-variabel.css'
import './styles/global.css'

// SWIPERJS STYLES
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

// REACT TOASTIFY STYLES
import 'react-toastify/ReactToastify.min.css'

// CHARTJS IMPORT
import Chart from 'chart.js/auto'
import {defaults,CategoryScale} from 'chart.js'
import AppRouter from './AppRouter'

// Register and configure ChartJS
Chart.register(CategoryScale)
defaults.maintainAspectRatio = false
defaults.responsive = true

function App() {

	return (
			<AppRouter/>
		)
}

export default App
