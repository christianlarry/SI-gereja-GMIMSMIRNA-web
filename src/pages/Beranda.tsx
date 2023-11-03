import BeritaSection from "../components/Beranda/BeritaSection"
import PengumumanSection from "../components/Beranda/PengumumanSection"
import StrukturBpmjSection from "../components/Beranda/StrukturBpmjSection"
import TentangGerejaSection from "../components/Beranda/TentangGerejaSection"

const Beranda = () => {
	return (
		<main>
			<PengumumanSection />
			<TentangGerejaSection />
			<StrukturBpmjSection />
			<BeritaSection />
		</main>
	)
}

export default Beranda