import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import './ErrorPage.css'

const ErrorPage = ()=>(
  <div className='error-page-container'>
    <i className='error-page-logo'><FontAwesomeIcon icon={faTriangleExclamation}/></i>
    <h1 className='error-page-title'>Something Went Wrong :(</h1>
    <span className='error-page-desc'>Terjadi kesalahan. Coba refresh halaman atau kembali ke halaman sebelumnya!</span>
  </div>
)

export default ErrorPage