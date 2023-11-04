import { getBerita } from '../../../services/api'
import useSWR from 'swr'
import NewsCard from '../../card/NewsCard'
import DataNotFound from '../../error/DataNotFound'
import DataLoader from '../../loader/DataLoader'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'
import { Pagination } from 'swiper/modules'
import InternalServerError from '../../error/InternalServerError'

const BeritaMain = ()=>{
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

  // SWR 
  const {data,error,isLoading,mutate} = useSWR('/api/berita',getBerita,{revalidateOnFocus: true})

  if(isLoading) return <DataLoader message='Mendapatkan Berita...'/>

  if(error || !data) return <InternalServerError message='Tidak bisa mendapatkan berita.' refreshMessage='Refresh berita' onRefresh={mutate}/>

  const berita = data.data.data
  if(berita.length === 0) return <DataNotFound message='Belum ada berita yang diposting.' refreshMessage='Refresh berita' onRefresh={mutate}/>

  return (
    <>
      <Swiper {...beritaSwiperProps} style={{padding: '1rem'}}>
        {berita.map((value,i)=>(
          <SwiperSlide key={i} style={{width: 'auto',display:'flex',justifyContent:'center'}}>
            <NewsCard berita={value}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="berita-swiper-pagination"></div>
    </>
  )
}

export default BeritaMain