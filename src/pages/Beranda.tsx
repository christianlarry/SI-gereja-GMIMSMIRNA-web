import BerandaHero from "../components/Beranda/BerandaHero"
import BeritaSection from "../components/Beranda/BeritaSection"
import PengumumanSection from "../components/Beranda/PengumumanSection"
import StrukturBpmjSection from "../components/Beranda/StrukturBpmjSection"
import TentangGerejaSection from "../components/Beranda/TentangGerejaSection"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

import './Beranda.css'

const Beranda = () => {

	return (
		<>
			<Header beranda />
			<BerandaHero />
			<main>
				<PengumumanSection />
				<TentangGerejaSection />
				<StrukturBpmjSection />
				<BeritaSection />
			</main>
			<Footer/>
		</>
	)
}

export default Beranda