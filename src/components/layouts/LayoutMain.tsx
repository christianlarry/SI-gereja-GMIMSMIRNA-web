import { Outlet } from "react-router-dom"
import GoTopButton from "../button/GoTopButton"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import { Suspense } from "react"

import './LayoutMain.css'

const LayoutMain = ({children}:{children?:React.ReactNode})=>(
  <div className="layout-main-wrapper">
    <div>
      <Header />
      <Suspense fallback={<h1>Loading cuyyy</h1>}>
        {children ? children : <Outlet/>}
      </Suspense>
    </div>
    <Footer/>
    <GoTopButton/>
  </div>
)

export default LayoutMain