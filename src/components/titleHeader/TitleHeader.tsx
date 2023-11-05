import { Link, useLocation } from 'react-router-dom'
import './TitleHeader.css'
import { useEffect } from 'react'
import { useTitleHeader } from './TitleHeaderContext'

const TitleHeader = ()=>{

  const {title,setTitle} = useTitleHeader()

  const location = useLocation()
  const urlPathArr = location.pathname.slice(1).split('/')

  const pageTitleFormat = (path:string):string=>path.split('-').map(val=>val[0].toUpperCase()+val.substring(1)).join(' ')

  // MAPPING TITLE HEADER LINKS
  const titleHeaderNavData = urlPathArr.map((path,i)=>{
    
    path = pageTitleFormat(path)
    let url:string[] = []

    urlPathArr.forEach((path,index) =>{
      if(index > i) return 
      url.push(path)
    })

    return {
      pageTitle: path,
      url: '/'+url.join('/')
    }
  }).filter((_val,i)=>i!==urlPathArr.length-1)

  useEffect(()=>{
    setTitle(pageTitleFormat(urlPathArr[urlPathArr.length-1]))
  },[location])

  return (
    <section className='title-header'>
      <div className="title-header-container container">
        <div className='title-header-nav'>
          <Link className='title-header-nav-link' to='/'>Beranda</Link>
          {titleHeaderNavData.map((link,i)=><Link key={i} className='title-header-nav-link' to={link.url}>{link.pageTitle}</Link>)}
          <span className='title-header-nav-current'>{title}</span>
        </div>
        <h2 className='title-header-title'>{title}</h2>
      </div>
    </section>
  )
}

export default TitleHeader