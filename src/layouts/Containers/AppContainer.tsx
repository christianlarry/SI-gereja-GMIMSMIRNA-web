import { ErrorBoundary } from "react-error-boundary"
import { Outlet, useLocation } from "react-router-dom"
import ErrorPage from "../../pages/ErrorPages/ErrorPage"
import {SWRConfig} from 'swr'
import { useEffect, useState } from "react"

import {ToastContainer} from 'react-toastify'

const AppContainer = ()=>{
  
  const location = useLocation()
  const [prevPath,setPrevPath] = useState<string>(location.pathname)

  useEffect(()=>{
    /* 
    - KETIKA LOCATION PATH SEBELUMNNYA TIDAK SAMA DENGAN SEKARANG MAKA TAMPILAN WINDOW AKAN LANGSUNG KE ATAS SECARA "INSTANT"

    - JIKA MASIH SAMA MAKA WINDOW AKAN KE ATAS SECARA "SMOOTH"
    */
    window.scrollTo({top: 0,left: 0,behavior: (prevPath === location.pathname)? 'smooth' : 'instant'})

    setPrevPath(location.pathname)
    
    const elementId = location.hash.substring(1)
    const element = document.getElementById(elementId)
    if(element) return element.scrollIntoView()
  },[location])

  return (
    <ErrorBoundary fallback={<ErrorPage/>}>
      <SWRConfig value={{shouldRetryOnError: false,revalidateOnFocus: false}}>
        <Outlet/>
      </SWRConfig>
      <ToastContainer/>
    </ErrorBoundary>
  )
}

export default AppContainer