import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faPeopleRoof, faTableCells } from '@fortawesome/free-solid-svg-icons'
import Card from './card/Card'
import { getTotalAnggotaJemaat, getTotalKeluarga, getTotalKolom } from '../services/api'
import SectionTitle from "./section/SectionTitle"

import './StatistikCardLists.css'
import DataLoader from './loader/DataLoader'
import ErrorText from './error/ErrorText'

const StatistikCardLists = () => {
  // const [totalAnggotaJemaat,setTotalAnggotaJemaat] = useState<number>(0)
  // const [totalKeluarga,setTotalKeluarga] = useState<number>(0)
  // const [totalKolom,setTotalKolom] = useState<number>(0)

  // // EFFECT
  // useEffect(()=>{
  //   const getStatistik = async ()=>{
  //     try {
  //       const totalAnggotaJemaat = await getTotalAnggotaJemaat()
  //       const totalKeluarga = await getTotalKeluarga()
  //       const totalKolom = await getTotalKolom()
        
  //       setTotalAnggotaJemaat(totalAnggotaJemaat.data.data.total)
  //       setTotalKeluarga(totalKeluarga.data.data.total)
  //       setTotalKolom(totalKolom.data.data.total)

  //     } catch (err) {
  //       console.error(err)
  //       if(err instanceof Error) console.error(err.stack)
  //       if(isAxiosError(err)) console.error('Request error: '+err.response?.status)
  //     }
  //   }

  //   getStatistik()
  // }, [])

  const totalAnggotaJemaat = getTotalAnggotaJemaat()
  const totalKeluarga = getTotalKeluarga()
  const totalKolom = getTotalKolom()

  return (
    <ul className="statistik-card-lists">
      <li>
        <Card className='statistik-card'>
          <span className="icon">
            <FontAwesomeIcon icon={faPerson} />
          </span>
          {totalAnggotaJemaat.data &&
          <SectionTitle text={totalAnggotaJemaat.data.data.total.toString()} style={{ fontWeight: 600 }} />
          }
          {totalAnggotaJemaat.isLoading && <DataLoader/>}
          {totalAnggotaJemaat.error && <ErrorText text='Invalid/Error!'/>}
          <span className="statistik-card-desc">Anggota Jemaat</span>
        </Card>
      </li>
      <li>
        <Card className='statistik-card'>
          <span className="icon">
            <FontAwesomeIcon icon={faPeopleRoof} />
          </span>
          {totalKeluarga.data && 
          <SectionTitle text={totalKeluarga.data.data.total.toString()} style={{ fontWeight: 600 }} />
          }
          {totalKeluarga.isLoading && <DataLoader/>}
          {totalKeluarga.error && <ErrorText text='Invalid/Error!'/>}
          <span className="statistik-card-desc">Jumlah Keluarga</span>
        </Card>
      </li>
      <li>
        <Card className='statistik-card'>
          <span className="icon">
            <FontAwesomeIcon icon={faTableCells} />
          </span>
          {totalKolom.data &&
          <SectionTitle text={totalKolom.data.data.total.toString()} style={{ fontWeight: 600 }} />
          }
          {totalKolom.isLoading && <DataLoader/>}
          {totalKolom.error && <ErrorText text='Invalid/Error!'/>}
          <span className="statistik-card-desc">Jumlah Kolom</span>
        </Card>
      </li>
    </ul>
  )
}

export default StatistikCardLists