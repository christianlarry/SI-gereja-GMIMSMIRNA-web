import PengumumanCard from './PengumumanCard'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination} from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import {getPengumuman} from '../../services/api'

import {isAxiosError} from 'axios'
import {useState, useEffect} from 'react'
import PengumumanModel from '../../interfaces/PengumumanModel'

const PengumumanSwiper = () => {
  const [pengumuman,setPengumuman] = useState<PengumumanModel[] | null>(null)

  const swiperProps: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      1050: {
        slidesPerView: 2
      }
    },
    speed: 600,
    pagination: {
      clickable: true,
      el: '.pengumuman-swiper-pagination',
      bulletClass: 'swiper-bullet',
      bulletActiveClass: 'swiper-bullet-active',
    }
  }

  useEffect(()=>{
    getPengumuman().then(response =>{
      if(response.status === 200){
        setPengumuman(response.data.data as PengumumanModel[])
      }
    }).catch(err =>{
      if(isAxiosError(err)){
        console.error(err.response?.status,err.response?.statusText)
      }
    })
  },[])

  return (
    <Swiper {...swiperProps}>
      {pengumuman && pengumuman.map((data)=>(
        <SwiperSlide key={data.id}>
          <PengumumanCard data={data}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PengumumanSwiper