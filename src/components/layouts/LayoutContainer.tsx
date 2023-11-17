import { ErrorBoundary } from "react-error-boundary"
import { Outlet, useLocation } from "react-router-dom"
import ErrorPage from "../../pages/ErrorPages/ErrorPage"
import {SWRConfig} from 'swr'
import { useEffect } from "react"

const LayoutContainer = ()=>{
  
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo({top: 0,left: 0,behavior: 'instant'})
    const elementId = location.hash.substring(1)
    const element = document.getElementById(elementId)
    if(element) return element.scrollIntoView()
  },[location])

  return (
    <ErrorBoundary fallback={<ErrorPage/>}>
      <SWRConfig value={{shouldRetryOnError: false,revalidateOnFocus: false}}>
        <Outlet/>
      </SWRConfig>
    </ErrorBoundary>
  )
}

export default LayoutContainer