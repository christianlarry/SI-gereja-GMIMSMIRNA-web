import { Outlet, useLocation } from "react-router-dom"
import SecondaryNavbar from "../../components/navbar/SecondaryNavbar"
import smirnaNavDropdowns from '../../data/getNavigationDropdowns'
import { Suspense } from "react"
import DataLoader from "../../components/loader/DataLoader"

const PerangkatPelayanan = () => {

  const perangkatPelayananDropdowns = smirnaNavDropdowns('/perangkat-pelayanan')!

  const location = useLocation()

  return (
    <div className="container" style={{width: '100%',display: 'flex',flexDirection: 'column'}}>
      <SecondaryNavbar data={perangkatPelayananDropdowns} style={{marginBottom: '6rem',alignSelf:'center'}}/>

      {location.pathname === '/perangkat-pelayanan' && 
        <div>
          <p style={{textAlign: 'center'}}>Klik link diatas untuk melihat perangkat pelayanan Jemaat GMIM Smirna</p>
        </div>
      }

      <Suspense fallback={<DataLoader/>}>
        <Outlet/>
      </Suspense>
    </div>
  )
}

export default PerangkatPelayanan