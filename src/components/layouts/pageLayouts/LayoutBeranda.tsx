import { Outlet } from "react-router-dom"
import BerandaHero from "../../PagesComponents/Beranda/BerandaHero"
import GoTopButton from "../../button/GoTopButton"
import Footer from "../../footer/Footer"
import Header from "../../header/Header"
import { Suspense } from "react"
import DataLoader from "../../loader/DataLoader"
import SmirnaMalabarLogo from "../../SmirnaMalabarLogo"

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