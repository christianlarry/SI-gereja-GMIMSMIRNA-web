import Aside from "../../../components/aside/Aside"
import AsideLinkLists, { AsideLinkListsItem } from "../../../components/aside/AsideLinkLists"
import AsideSection from "../../../components/aside/AsideSection"
import AsideTitle from "../../../components/aside/AsideTitle"

import AsidePopulerBeritaList from "../../../components/PagesComponents/Berita/AsidePopulerBeritaList"
import ErrorText from "../../../components/error/ErrorText"

import InputText from "../../../components/input/InputText"
import { getKategoriBerita } from "../../../services/api"
import { Link, useLocation, useNavigate } from "react-router-dom"
import DataLoader from "../../loader/DataLoader"
import { useEffect, useRef } from "react"

interface BeritaAsideProps{
  currentKategori:string | undefined
}

const BeritaAside = ({currentKategori}:BeritaAsideProps) => {

  // * SWR
  const kategoriBerita = getKategoriBerita()

  // * HOOKS
  const navigate = useNavigate()
  const location = useLocation()

  // * REF
  const searchInputRef:React.RefObject<HTMLInputElement> = useRef(null)

  // * EVENT HANDLER
  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const s = e.target.value
    const pathArr = location.pathname.substring(1).split('/')
    const currentPath = pathArr[pathArr.length - 1]

    if(s.length === 0 && currentPath === 'berita') navigate('/berita?halaman=1')
  }

  const handleSearchClick = (inputValue:string)=>{
    if(inputValue.length === 0) return
    navigate(`/berita?cari=${inputValue}`)
  }


  // * EFFECT
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const cariParam = urlParams.get('cari')
    
    if(cariParam && searchInputRef.current){
      searchInputRef.current.focus()
      searchInputRef.current.value = cariParam
    }
  
  },[location])

  return (
    <Aside style={{ width: 350 }}>
      <AsideSection>
        <AsideTitle text="Cari Berita" />
        <InputText inputRef={searchInputRef} type="search" onChange={handleSearchChange} onSearch={handleSearchClick} />
      </AsideSection>
      <AsideSection>
        <AsideTitle text="Kategori" />

        {(kategoriBerita.isLoading || kategoriBerita.isValidating) && <DataLoader />}
        {kategoriBerita.error && <ErrorText text="Terjadi kesalahan mendapatkan data!" />}

        {(kategoriBerita.data && !kategoriBerita.error) &&
          <AsideLinkLists>
            <AsideLinkListsItem>
              <Link className={!currentKategori ? 'active' : undefined} to={`/berita?halaman=1`}>Semua</Link>
            </AsideLinkListsItem>
            {kategoriBerita.data.data.map(kat => (
              <AsideLinkListsItem key={kat.id}>
                <Link
                  className={(currentKategori === kat.nama) ? 'active' : undefined}
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
  )
}

export default BeritaAside