import { Outlet } from "react-router-dom"
import GoTopButton from "../button/GoTopButton"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Suspense } from "react"

import './LayoutMain.css'
import TitleHeader from "../titleHeader/TitleHeader"
import { TitleHeaderProvider } from "../titleHeader/TitleHeaderContext"
import DataLoader from "../loader/DataLoader"

const LayoutMainSuspenseFallback = ()=>(
  <div className="layout-main-suspense-fallback">
    <DataLoader/>
  </div>
)

const LayoutMain = ({children}:{children?:React.ReactNode})=>{

  return (
    <TitleHeaderProvider>
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
    </TitleHeaderProvider>
  )
}

export default LayoutMain