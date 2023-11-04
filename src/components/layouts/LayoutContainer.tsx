import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"
import ErrorPage from "../../pages/error/ErrorPage"
import {SWRConfig} from 'swr'

const LayoutContainer = ()=>(
  <ErrorBoundary fallback={<ErrorPage/>}>
    <SWRConfig value={{shouldRetryOnError: false,revalidateOnFocus: false}}>
      <Outlet/>
    </SWRConfig>
  </ErrorBoundary>
)

export default LayoutContainer