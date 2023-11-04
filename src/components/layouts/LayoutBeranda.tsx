import { Outlet } from "react-router-dom"
import BerandaHero from "../PagesComponents/Beranda/BerandaHero"
import GoTopButton from "../button/GoTopButton"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Suspense } from "react"

const LayoutBeranda = ({children}:{children?:React.ReactNode})=>(
  <Suspense>
    <Header beranda />
    <BerandaHero />
    {children ? children : <Outlet/>}
    <Footer/>
    <GoTopButton/>
  </Suspense>
)

export default LayoutBeranda