import { Link } from 'react-router-dom'
import './BeritaSection.css'
import SectionSubtitle from '../SectionSubtitle'
import SectionTitle from '../SectionTitle'
import SectionTitleSep from '../SectionTitleSep'
import Button from '../button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import NewsCard from '../NewsCard'
import { useEffect, useState } from 'react'
import BeritaModel from '../../interfaces/BeritaModel'
import { getBerita } from '../../services/api'
import DataNotFound from '../error/DataNotFound'
import DataLoader from '../loader/DataLoader'

const BeritaSection = () => {

  // STATE
  const [berita,setBerita] = useState<BeritaModel[]>([])
  const [isLoading,setIsLoading] = useState<boolean>(false)

  // EFFECT
  useEffect(()=>{

    getBeritaAndSetState()
  },[])

  const getBeritaAndSetState = ()=>{
    setIsLoading(true)
    getBerita()
    .then(value=>{
      setIsLoading(false)
      setBerita(value.data.data)
    })
    .catch(err=>{
      console.error(err)
    })
  }

  // SWIPER PROPS
  const beritaSwiperProps:SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 48,
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".berita-swiper-pagination",
        clickable: true,
        bulletClass: 'swiper-bullet',
        bulletActiveClass: 'swiper-bullet-active',
    },
    breakpoints: {
      1350:{
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      910:{
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    }
  }

  return (<section>
    <div className="container berita-container">
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>

        <Link to="/berita">
          <SectionSubtitle text='Berita Gereja'/>
        </Link>
        <SectionTitle text='Berita Terbaru'/>
        <SectionTitleSep />

      </div>

      <div className="berita-main-container">
        {berita.length !== 0 && 
          <Swiper {...beritaSwiperProps} style={{padding: '1rem'}}>
            {berita.map((value,i)=>(
              <SwiperSlide key={i} style={{width: 'auto',display:'flex',justifyContent:'center'}}>
                <NewsCard berita={value}/>
              </SwiperSlide>
            ))}
          </Swiper>
        }

        {(berita.length === 0 && !isLoading) &&
          <DataNotFound message='Belum ada berita yang diposting.' refreshMessage='Refresh berita' onRefresh={getBeritaAndSetState}/>
        }

        {isLoading && <DataLoader message='Mendapatkan Berita...'/>}

        <div className="berita-swiper-pagination"></div>
      </div>

      <div style={{display: 'flex',justifyContent:'center'}}>
        <Button><Link to='/berita' className='font-family-primary'>Lihat Berita Lainnya</Link></Button>
      </div>

    </div>
  </section>)
}

export default BeritaSection