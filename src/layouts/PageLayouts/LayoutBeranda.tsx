import { Outlet } from "react-router-dom"
import BerandaHero from "../../components/PagesComponents/Beranda/BerandaHero"
import GoTopButton from "../../components/ui/Button/GoTopButton"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { Suspense } from "react"
import DataLoader from "../../components/ui/Loader/DataLoader"
import SmirnaMalabarLogo from "../../components/SmirnaMalabarLogo"

const LayoutBerandaSuspenseFallback = ()=>(
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '1rem',
    height: '100vh',
    width: '100vw'
    }}>
    <SmirnaMalabarLogo dark/>
    <DataLoader/>
  </div>
)

const LayoutBeranda = ({children}:{children?:React.ReactNode})=>(
  <Suspense fallback={<LayoutBerandaSuspenseFallback />}>
    <Header beranda />
    <BerandaHero />
    {children ? children : <Outlet/>}
    <Footer/>
    <GoTopButton/>
  </Suspense>
)

export default LayoutBeranda