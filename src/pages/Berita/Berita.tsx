import Pagination from "../../components/pagination/Pagination"
import Aside from "../../components/aside/Aside"
import AsideLinkLists, { AsideLinkListsItem } from "../../components/aside/AsideLinkLists"
import AsideSection from "../../components/aside/AsideSection"
import AsideTitle from "../../components/aside/AsideTitle"
import MainAsideContainer from "../../components/layouts/MainAsideContainer"
import NewsCard from "../../components/card/NewsCard"
import DataNotFound from "../../components/error/DataNotFound"
import InternalServerError from "../../components/error/InternalServerError"
import DataLoader from "../../components/loader/DataLoader"
import handleRefreshBerita from "../../services/handleRefreshBerita"
import './Berita.css'

import { Link, useNavigate, useLocation } from "react-router-dom"
import AsidePopulerBeritaList from "../../components/PagesComponents/Berita/AsidePopulerBeritaList"
import ErrorText from "../../components/error/ErrorText"
import { useEffect, useState } from "react"

import { useTitleHeader } from "../../components/titleHeader/TitleHeaderContext"
import { motion, useAnimationControls } from "framer-motion"

// IMPORT FETCH FUNCTIONS
import { getBerita, getKategoriBerita } from "../../services/api"

const Berita = () => {
  // * STATE
  const [apiQuery, setApiQuery] = useState<string>('')
  const [kategori, setKategori] = useState<string>()

  // * SWR
  const beritaResult = getBerita(apiQuery)
  const kategoriBerita = getKategoriBerita()

  // * HANDLE QUERY PARAMETER
  const location = useLocation()
  const { setTitle } = useTitleHeader()

  const navigate = useNavigate()

  useEffect(() => {
    if (!location.search) return navigate('/berita?halaman=1')

    const queryParams = new URLSearchParams(location.search)
    const kategoriParam = queryParams.get('kategori')
    const pageParam = queryParams.get('halaman')

    if (!pageParam) return navigate(`?${kategoriParam ? 'kategori=' + kategoriParam : ''}&halaman=1`)

    // ? CEK QUERY PARAMETER, JIKA ADA MAKA API QUERY AKAN BERUBAH
    const queryArr: string[] = []

    if (kategoriParam) queryArr.push(`kategori=${kategoriParam}`)
    if (pageParam) queryArr.push(`page=${pageParam}`)

    if (queryArr.length) setTitle(`Berita${kategoriParam ? ' - ' + kategoriParam : ''}${pageParam ? ' [Halaman ' + pageParam + ']' : ''}`)

    setKategori(kategoriParam || undefined)
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
    <div className="container w-full">
      <MainAsideContainer>
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
                    navigate(`?${kategori?'kategori='+kategori:''}&halaman=${page}`)
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
                    navigate(`?${kategori?'kategori='+kategori:''}&halaman=${page}`)
                  }}/>
                }
              </>
            }

            {/* BERITA KOSONG */}
            {(beritaResult.data && beritaResult.data.data.length === 0) &&
              <DataNotFound message="Belum ada berita yang diposting." refreshMessage="Refresh" onRefresh={handleRefreshBerita(beritaResult.mutate)} />
            }

            {/* GAGAL GET BERITA, ERROR 500 */}
            {beritaResult.error &&
              <InternalServerError message="Terjadi kesalahan." refreshMessage="Refresh" onRefresh={handleRefreshBerita(beritaResult.mutate)} />
            }

            {/* PRELOADER/IS LOADING */}
            {(beritaResult.isLoading) && <DataLoader message="Mendapatkan Berita..." />}
          </section>
        </main>
        <Aside style={{ width: 350 }}>
          <AsideSection>
            <AsideTitle text="Kategori" />

            {(kategoriBerita.isLoading || kategoriBerita.isValidating) && <DataLoader />}
            {kategoriBerita.error && <ErrorText text="Terjadi kesalahan mendapatkan data!" />}

            {(kategoriBerita.data && !kategoriBerita.error) &&
              <AsideLinkLists>
                <AsideLinkListsItem>
                  <Link className={!kategori ? 'active' : undefined} to={`/berita?halaman=1`}>Semua</Link>
                </AsideLinkListsItem>
                {kategoriBerita.data.data.map(kat => (
                  <AsideLinkListsItem key={kat.id}>
                    <Link 
                    className={(kategori === kat.nama) ? 'active' : undefined} 
                    to={`/berita?kategori=${kat.nama}&halaman=1`}>{kat.nama}
                    </Link>
                  </AsideLinkListsItem>
                ))}

              </AsideLinkLists>
            }
          </AsideSection>
          <AsideSection>
            <AsideTitle text="Berita Populer" />
            <AsidePopulerBeritaList />
          </AsideSection>
        </Aside>
      </MainAsideContainer>
    </div>
  )
}

export default Berita