import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"
import ErrorPage from "../../pages/error/ErrorPage"

const LayoutContainer = ()=>(
  <ErrorBoundary fallback={<ErrorPage/>}>
    <Outlet/>
  </ErrorBoundary>
)

export default LayoutContainer