import './AsideArticleCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClockFour } from "@fortawesome/free-regular-svg-icons"
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons"
import { blankThumbnailUrl } from '../../services/api'
import { Link } from 'react-router-dom'

interface AsideArticleCardProps{
  imageUrl?:string|null
  title:string
  href:string
  date:string
  views:number
}

const AsideArticleCard = ({
  imageUrl,
  title,
  href,
  date,
  views
}:AsideArticleCardProps) => {
  return (
    <Link className="aside-berita-item" to={href}>
      <div className="aside-berita-image-container">
        <div className='aside-berita-image-wrapper'>
          <img className="aside-berita-image" src={imageUrl || blankThumbnailUrl} alt={`Gambar berita "${title}"`} />
        </div>
      </div>
      <div className="aside-berita-data">
        <h2 className="aside-berita-data-title">{title}</h2>
        <span className="aside-berita-data-detail">
          <i><FontAwesomeIcon icon={faClockFour} /></i>
          {date}
        </span>
        <span className="aside-berita-data-detail">
          <i><FontAwesomeIcon icon={faBookOpenReader} /></i>
          {views}
        </span>
      </div>
    </Link>
  )
}

export default AsideArticleCard