import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faPeopleRoof, faTableCells } from '@fortawesome/free-solid-svg-icons'
import Card from './card/Card'
import { useEffect,useState } from 'react'
import { getTotalAnggotaJemaat, getTotalKeluarga, getTotalKolom } from '../services/api'
import { isAxiosError } from 'axios'
import SectionTitle from "./section/SectionTitle"

import './StatistikCardLists.css'

const StatistikCardLists = () => {
  const [totalAnggotaJemaat,setTotalAnggotaJemaat] = useState<number>(0)
  const [totalKeluarga,setTotalKeluarga] = useState<number>(0)
  const [totalKolom,setTotalKolom] = useState<number>(0)

  // EFFECT
  useEffect(()=>{
    const getStatistik = async ()=>{
      try {
        const totalAnggotaJemaat = await getTotalAnggotaJemaat()
        const totalKeluarga = await getTotalKeluarga()
        const totalKolom = await getTotalKolom()
        
        setTotalAnggotaJemaat(totalAnggotaJemaat.data.data.total)
        setTotalKeluarga(totalKeluarga.data.data.total)
        setTotalKolom(totalKolom.data.data.total)

      } catch (err) {
        console.error(err)
        if(err instanceof Error) console.error(err.stack)
        if(isAxiosError(err)) console.error('Request error: '+err.response?.status)
      }
    }

    getStatistik()
  }, [])

  return (
    <ul className="statistik-card-lists">
      <li>
        <Card className='statistik-card'>
          <span className="icon">
            <FontAwesomeIcon icon={faPerson} />
          </span>
          <SectionTitle text={totalAnggotaJemaat.toString()} style={{ fontWeight: 600 }} />
          <span className="statistik-card-desc">Anggota Jemaat</span>
        </Card>
      </li>
      <li>
        <Card className='statistik-card'>
          <span className="icon">
            <FontAwesomeIcon icon={faPeopleRoof} />
          </span>
          <SectionTitle text={totalKeluarga.toString()} style={{ fontWeight: 600 }} />
          <span className="statistik-card-desc">Jumlah Keluarga</span>
        </Card>
      </li>
      <li>
        <Card className='statistik-card'>
          <span className="icon">
            <FontAwesomeIcon icon={faTableCells} />
          </span>
          <SectionTitle text={totalKolom.toString()} style={{ fontWeight: 600 }} />
          <span className="statistik-card-desc">Jumlah Kolom</span>
        </Card>
      </li>
    </ul>
  )
}

export default StatistikCardLists