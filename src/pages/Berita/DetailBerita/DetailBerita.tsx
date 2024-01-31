import { Link, useParams } from 'react-router-dom'
import './DetailBerita.css'
import { getBeritaById } from '../../../services/api'
import BadRequestError from '../../../components/error/BadRequestError'
import { isAxiosError } from 'axios'
import DataNotFound from '../../../components/error/DataNotFound'
import { useTitleHeader } from '../../../components/titleHeader/TitleHeaderContext'
import DataLoader from '../../../components/loader/DataLoader'
import InternalServerError from '../../../components/error/InternalServerError'
import { useEffect, useState } from 'react'
import useBerita from '../../../hooks/useBerita'
import FadeReveal from '../../../components/reveal/FadeReveal'
import DetailBeritaArticle from '../../../components/PagesComponents/Berita/DetailBeritaArticle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import SectionTitle from '../../../components/section/SectionTitle'
import Paragraph from '../../../components/Paragraph'
import InputText from '../../../components/input/InputText'
import TextArea from '../../../components/input/TextArea'
import Button from '../../../components/button/Button'
import { toastError } from '../../../utils/toast'
import SpanText from '../../../components/SpanText'

const DetailBerita = ()=>{

  const currentUrl = encodeURIComponent(window.location.href)

  const params = useParams()
  const [idBerita] = useState<number>(Number(params.id))

  // * HOOKS
  const {setTitle} = useTitleHeader()
  const {setCurrentKategori} = useBerita()

  // * STATE
  const [komentar,setKomentar] = useState<string>('')
  const [nama,setNama] = useState<string>('')

  // ATUR TITLE HEADER

  useEffect(()=>{
    if(!idBerita || isNaN(idBerita)){
      setTitle('Permintaan Tidak Valid')
    }
  },[idBerita])

  if(!idBerita || isNaN(idBerita)) {
    return <BadRequestError message='ID Berita yang diberikan tidak valid.'/>
  }
  
  const detailBerita = getBeritaById(idBerita)
  
  // SET TITLE BERDASARKAN HASIL FETCH DETAIL BERITA
  useEffect(()=>{
    if(detailBerita.error && isAxiosError(detailBerita.error) && detailBerita.error.response){
      switch(detailBerita.error.response.status){
        case 400:
          setTitle('Permintaan Tidak Valid')
          break
        case 404:
          setTitle('Berita Tidak Ditemukkan')
          break
      }
      return
    }
    if(detailBerita.error) return setTitle('Internal Server Error')
    if(detailBerita.data) {
      setCurrentKategori(detailBerita.data.data.category)
      return setTitle(detailBerita.data.data.news_title)
    }

  },[detailBerita])

  // EVENT HANDLER
  const handleCommentFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(nama.length === 0) return toastError('Harus menyertakkan Nama')
    if(komentar.length < 10) return toastError('Komentar minimal 10 karakter')
    if(komentar.length > 1000) return toastError('Komentar melebihi batas maximal karakter(1000)')
  }

  // CONDITIONAL RENDER

  if(detailBerita.isLoading) return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'start',
      flex: 1
    }}>
      <DataLoader/>
    </div>
  )

  if(
    detailBerita.error && 
    isAxiosError(detailBerita.error) &&
    detailBerita.error.response) {  

    switch(detailBerita.error.response.status){
      case 400:
        return <BadRequestError message='ID Berita yang diberikan tidak valid.'/>
      case 404:
        return <DataNotFound message='Berita yang dimaksud tidak ada atau telah dihapus dari server kami.'/>
    }
  }
  

  if(detailBerita.error) {
    return <InternalServerError message='Terjadi kesalahan saat mendapatkan data berita!' refreshMessage='Refresh' onRefresh={()=>detailBerita.mutate()}/>
  }


  if(!detailBerita.data) {
    return <BadRequestError message='ID Berita yang diberikan tidak valid.'/>
  }

  return (
    <main>
      <FadeReveal delay={0.4}>
        <div className='detail-berita-wrapper'>
          <section id='detail-berita'>
            <DetailBeritaArticle berita={detailBerita.data.data}/>
            <div className='share-berita'>
              <div>
                <Link className='share-berita-kategori' to={`/berita?kategori=${detailBerita.data.data.category}`}>
                  <SpanText size='sm' text={`#${detailBerita.data.data.category}`}/>
                </Link>
                <SpanText text='Komentar(0)' className='text-gray' style={{fontWeight: 600}}/>
              </div>
              <ul className='share-berita-links'>
                <SpanText text='Bagikan:' size='md'/>
                <li>
                  <a title='Bagikan ke Facebook' href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank"><i><FontAwesomeIcon icon={faFacebook}/></i></a>
                </li>
                <li>
                  <a title='Bagikan ke Whatsapp' href={`whatsapp://send?text=${currentUrl}` }data-action='share/whatsapp/share'><i><FontAwesomeIcon icon={faWhatsapp}/></i></a>
                </li>
              </ul>
            </div>
          </section>
          <section id='detail-berita-comment'>
            <SectionTitle size='md' text='Tinggalkan Komentar'/>
            <Paragraph text='Sertai nama dan email anda'/>
            <form className='add-comment-form' onSubmit={handleCommentFormSubmit}>
              <div className='comment-input-nama-group'>
                <InputText type='text' placeholder='Nama Anda *' onChange={(e)=>setNama(e.target.value)}/>
              </div>
              <div className='comment-input-group'>
                <TextArea rows={8} placeholder='Komentar' onChange={(e)=>setKomentar(e.target.value)}/>
                <span className='comment-character'>{`${1000-komentar.length} karakter tersisa`}</span>
              </div>
              <Button><span style={{padding: '10px 20px'}}>Kirim</span></Button>
            </form>
          </section>
        </div>
      </FadeReveal>
    </main>
  )
}

export default DetailBerita