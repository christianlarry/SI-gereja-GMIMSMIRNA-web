import { Outlet } from "react-router-dom"
import GoTopButton from "../button/GoTopButton"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Suspense } from "react"
import spinner from '../../assets/images/loader/spinner-2.svg'

import './LayoutMain.css'

const LayoutMainSuspenseFallback = ()=>(
  <div className="layout-main-suspense-fallback">
    <img src={spinner} alt="Loading" width={50}/>
  </div>
)

const LayoutMain = ({children}:{children?:React.ReactNode})=>(
  <div className="layout-main-wrapper">
    <div className="layout-main-top">
      <Header />
      <Suspense fallback={<LayoutMainSuspenseFallback/>}>
        {children ? children : <Outlet/>}
      </Suspense>
    </div>
    <Footer/>
    <GoTopButton/>
  </div>
)

export default LayoutMain