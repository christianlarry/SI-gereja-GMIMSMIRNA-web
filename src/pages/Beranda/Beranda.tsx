import BeritaSection from "../../components/PagesComponents/Beranda/BeritaSection"
import PengumumanSection from "../../components/PagesComponents/Beranda/PengumumanSection"
import StrukturBpmjSection from "../../components/PagesComponents/Beranda/StrukturBpmjSection"
import TentangGerejaSection from "../../components/PagesComponents/Beranda/TentangGerejaSection"

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