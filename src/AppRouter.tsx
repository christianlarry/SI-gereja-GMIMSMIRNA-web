import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import {lazy} from 'react'

// PAGES/COMPONENTS
const Beranda = lazy(()=>import('./pages/Beranda'))
const TentangGereja = lazy(()=>import('./pages/TentangGereja'))
const SejarahGereja = lazy(()=>import('./pages/SejarahGereja'))
const DataJemaat = lazy(()=>import('./pages/DataJemaat'))
const PerangkatPelayanan = lazy(()=>import('./pages/PerangkatPelayanan'))
const PerangkatPelayanan_PenasihatBpmj = lazy(()=>import('./pages/PerangkatPelayanan/PenasihatBpmj'))
const PerangkatPelayanan_Bpmj = lazy(()=>import('./pages/PerangkatPelayanan/Bpmj'))
const PerangkatPelayanan_Kolom = lazy(()=>import('./pages/PerangkatPelayanan/Kolom'))
const PerangkatPelayanan_Kompelka = lazy(()=>import('./pages/PerangkatPelayanan/Kompelka'))
const PerangkatPelayanan_KomisiKerja = lazy(()=>import('./pages/PerangkatPelayanan/KomisiKerja'))
const PerangkatPelayanan_RayonPemudaAnak = lazy(()=>import('./pages/PerangkatPelayanan/RayonPemudaAnak'))
const Berita = lazy(()=>import('./pages/Berita'))
const DetailBerita = lazy(()=>import('./pages/Berita/DetailBerita'))

// ERROR PAGE
const NotFoundPage = lazy(()=>import('./pages/ErrorPages/NotFoundPage'))

// CONTAINER SELURUH APPLIKASI
import AppContainer from './layouts/Containers/AppContainer'
// LAYOUT FOR BERANDA
import LayoutBeranda from './layouts/PageLayouts/LayoutBeranda'
// LAYOUT FOR ALL PAGES
import LayoutMain from './layouts/LayoutMain'

// LAZY LAYOUT
const LayoutPerangkatPelayanan = lazy(()=>import('./layouts/PageLayouts/LayoutPerangkatPelayanan'))
const LayoutBerita = lazy(()=>import('./layouts/PageLayouts/LayoutBerita'))


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppContainer />}>
          <Route element={<LayoutBeranda />}>
            <Route index element={<Beranda />} />
          </Route>
          <Route element={<LayoutMain />}>
            <Route path='tentang-gereja' element={<TentangGereja />} />
            <Route path='sejarah-gereja' element={<SejarahGereja />} />
            <Route path='perangkat-pelayanan' element={<LayoutPerangkatPelayanan />}>
              <Route path='' element={<PerangkatPelayanan />} />
              <Route path='penasihat-bpmj' element={<PerangkatPelayanan_PenasihatBpmj />} />
              <Route path='bpmj' element={<PerangkatPelayanan_Bpmj />} />
              <Route path='kolom' element={<PerangkatPelayanan_Kolom />} />
              <Route path='kompelka' element={<PerangkatPelayanan_Kompelka />} />
              <Route path='komisi-kerja' element={<PerangkatPelayanan_KomisiKerja />} />
              <Route path='rayon-pemuda-remaja-anak' element={<PerangkatPelayanan_RayonPemudaAnak />} />
            </Route>
            <Route path='data-jemaat' element={<DataJemaat />} />
            <Route path='berita' element={<LayoutBerita />}>
              <Route path='' element={<Berita />} />
              <Route path=':id' element={<DetailBerita />} />
            </Route>

            <Route path='/*' element={<NotFoundPage />} />
          </Route>
        </Route>
        <Route path='/beranda' element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
  )
}

export default AppRouter