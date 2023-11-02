import './NewsCard.css'
import BeritaModel from '../../interfaces/BeritaModel'
import UnderlineTextButton from '../button/UnderlineTextButton'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons'
import Paragraph from '../Paragraph'
import { shortMonth, zeroPad } from '../../utils/dateTimeFormat'

interface NewsCardProps{
  berita:BeritaModel
}

const NewsCard = ({berita}:NewsCardProps) => {
  const postDate = new Date(berita.post_date)

  return (
    <div className="berita-card">
      <div className="berita-card-image-wrapper">
        <img src={berita.thumb_url ? berita.thumb_url : '/images/no_berita_thumbnail.jpg'} alt={`Thumbnail berita ${berita.news_title}`} loading="lazy" className="berita-card-image" />
      </div>
      <div className="berita-card-wrapper">
        <a href={`/berita/${berita.id}`} className="berita-card-title" title={berita.news_title}>{berita.news_title}</a>
        <div className="berita-card-data">
          <span className="berita-card-date">
            <i><FontAwesomeIcon icon={faClock}/></i>
            {`${zeroPad(postDate.getDate())} ${shortMonth(postDate.getMonth())} ${postDate.getFullYear()}`}
          </span>
          <span className="berita-card-author">
            <i><FontAwesomeIcon icon={faUser}/></i>
            {berita.author}
          </span>
        </div>
        <div className="berita-card-content">
          <Paragraph text={berita.news_title} color='black'/>
        </div>
        <UnderlineTextButton tabIndex={0}>
          <Link to={`/berita/${berita.id}`} title={berita.news_title} className='berita-card-more-link'>Baca Selengkapnya</Link>
        </UnderlineTextButton>
      </div>
    </div>
  )
}

export default NewsCard