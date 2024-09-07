import { Outlet } from "react-router-dom"
import GoTopButton from "../components/ui/Button/GoTopButton"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { Suspense } from "react"

import './LayoutMain.css'
import TitleHeader from "../components/titleHeader/TitleHeader"
import { TitleHeaderProvider } from "../components/titleHeader/TitleHeaderContext"
import DataLoader from "../components/ui/Loader/DataLoader"
import FadeReveal from "../components/reveal/FadeReveal"

const LayoutMainSuspenseFallback = ()=>(
  <div className="layout-main-suspense-fallback">
    <DataLoader/>
  </div>
)

const LayoutMain = ({children}:{children?:React.ReactNode})=>{

  return (
    <TitleHeaderProvider>
      <FadeReveal>
        <div className="layout-main-wrapper">
          <div className="layout-main-top">
            <Header />
            <TitleHeader/>
            <Suspense fallback={<LayoutMainSuspenseFallback/>}>
              {children ? children : <Outlet/>}
            </Suspense>
          </div>
          <Footer/>
          <GoTopButton/>
        </div>
      </FadeReveal>
    </TitleHeaderProvider>
  )
}

export default LayoutMain