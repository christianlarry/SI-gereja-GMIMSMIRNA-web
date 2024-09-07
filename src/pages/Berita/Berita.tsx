import Pagination from "../../components/pagination/Pagination"
import NewsCard from "../../components/ui/Card/NewsCard"
import DataNotFound from "../../components/error/DataNotFound"
import InternalServerError from "../../components/error/InternalServerError"
import DataLoader from "../../components/ui/Loader/DataLoader"
import handleRefreshBerita from "../../services/handleRefreshBerita"
import './Berita.css'

import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import { motion, useAnimationControls } from "framer-motion"

// IMPORT FETCH FUNCTIONS
import { getBerita } from "../../services/api"
import { isAxiosError } from "axios"
import useBerita from "../../hooks/useBerita"
import useTitleHeader from "../../hooks/useTitleHeader"

const Berita = () => {
  // * STATE
  const [apiQuery, setApiQuery] = useState<string>('')

  // * SWR
  const beritaResult = getBerita(apiQuery)

  // * HOOKS
  const navigate = useNavigate()
  const location = useLocation()
  const { setTitle } = useTitleHeader()
  const { currentKategori, setCurrentKategori } = useBerita()

  // * HANDLE QUERY PARAMETER
  useEffect(() => {
    if (!location.search) {
      setTitle('Berita [Halaman 1]')
      return navigate('/berita?halaman=1', {replace: true})
    }

    const queryParams = new URLSearchParams(location.search)

    const cariParam = queryParams.get('cari')
    const kategoriParam = queryParams.get('kategori')
    const pageParam = queryParams.get('halaman')

    // JIKA ADA PARAMETER CARI...
    if(cariParam){
      if(kategoriParam || pageParam) return navigate(`/berita?cari=${cariParam}`, {replace: true})

      setApiQuery('search='+cariParam)
      setTitle('Cari Berita: '+cariParam)
      return
    }

    // JIKA ADA PARAMETER KATEGORI DAN TIDAK ADA PARAMETER HALAMAN...
    if (!pageParam) return navigate(`?${kategoriParam ? 'kategori=' + kategoriParam+ '&' : ''}halaman=1`, {replace: true})

    // ? CEK QUERY PARAMETER, JIKA ADA MAKA API QUERY AKAN BERUBAH
    const queryArr: string[] = []

    if (kategoriParam) queryArr.push(`kategori=${kategoriParam}`)
    if (pageParam) queryArr.push(`page=${pageParam}`)

    if (queryArr.length) setTitle(`Berita${kategoriParam ? ' - ' + kategoriParam : ''}${pageParam ? ' [Halaman ' + pageParam + ']' : ''}`)

    setCurrentKategori(kategoriParam || undefined)
    setApiQuery(queryArr.join('&'))

  }, [location])

  useEffect(()=>{
    if(beritaResult.data){
      animateControls.set({opacity: 0})
      animateControls.start({
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 0.6
        }
      })
    }
  },[beritaResult.data])

  // ANIMATION
  const animateControls = useAnimationControls()

  return (
    <main>
      <section className="berita-box">

        {/* BERITA ADA */}
        {(beritaResult.data && beritaResult.data.data.length !== 0) &&
          <>
            {beritaResult.data.page &&
            <Pagination
              current={beritaResult.data.page.current} 
              totalPages={beritaResult.data.page.totalPages} 
              onPageChange={(page)=>{
                navigate(`?${currentKategori?'kategori='+currentKategori:''}&halaman=${page}`)
              }}/>
            }
            <motion.div animate={animateControls} className="berita-wrapper">
              {beritaResult.data.data.map(berita => (
                <NewsCard berita={berita} key={berita.id} />
              ))}
            </motion.div>
            {beritaResult.data.page &&
            <Pagination
              current={beritaResult.data.page.current} 
              totalPages={beritaResult.data.page.totalPages} 
              onPageChange={(page)=>{
                navigate(`?${currentKategori?'kategori='+currentKategori:''}&halaman=${page}`)
              }}/>
            }
          </>
        }

        {/* BERITA KOSONG */}
        {(beritaResult.data && beritaResult.data.data.length === 0) &&
          <DataNotFound message="Belum ada berita yang diposting." refreshMessage="Refresh" onRefresh={handleRefreshBerita(beritaResult.mutate)} />
        }

        {/* GAGAL GET BERITA, ERROR 500 */}
        {(beritaResult.error && !beritaResult.isLoading) &&
          <>
            {(isAxiosError(beritaResult.error) && beritaResult.error.response && beritaResult.error.response.status === 404) ? (
              <DataNotFound message="Tidak dapat menemukan berita."/>
            ):(
              <InternalServerError message="Terjadi kesalahan saat mendapatkan data berita." refreshMessage="Refresh" onRefresh={handleRefreshBerita(beritaResult.mutate)} />
            )}
          </>
        }

        {/* PRELOADER/IS LOADING */}
        {(beritaResult.isLoading) && <DataLoader message="Mendapatkan Berita..." />}
      </section>
    </main>
  )
}

export default Berita