import { Link } from 'react-router-dom'
import NotFoundErrorLogo from '../../components/error/logo/NotFoundErrorLogo'
import './NotFoundPage.css'

const NotFoundPage = ()=>{

  return (
    <div className='not-found-page-wrapper container'>
      <NotFoundErrorLogo/>
      <span className='not-found-page-status'>Halaman tidak ditemukan!</span>
      <span className='not-found-page-message'>
        Halaman yang anda cari tidak ditemukan.
        <Link to={'/'} className='not-found-page-homelink'> Kembali Ke Halaman Beranda</Link>
      </span>
    </div>
  )
}

export default NotFoundPage