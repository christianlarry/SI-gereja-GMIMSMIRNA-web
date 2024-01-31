import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BeritaModel } from "../../../interfaces/api/BeritaModel"
import { blankProfilePictureUrl, blankThumbnailUrl } from "../../../services/api"
import { faClock, faList } from "@fortawesome/free-solid-svg-icons"

import './DetailBeritaArticle.css'
import { shortMonth, zeroPad } from "../../../utils/dateTimeFormat"
import { Link } from "react-router-dom"

interface Props {
  berita: BeritaModel
}

const DetailBeritaArticle = ({ berita }: Props) => {

  const formatDate = (dateStr:string)=>{
    const date:Date = new Date(dateStr)

    return `${zeroPad(date.getDate())} ${shortMonth(date.getMonth())} ${date.getFullYear()}`
  }

  return (
    <article>
      <div className='detail-berita-data-top'>
        <div className="detail-berita-image">
          <img src={blankThumbnailUrl} alt={`Thumbnail - ${berita.news_title}`} />
        </div>
        <div className="detail-berita-meta">
          <ul className="meta-lists">
            <li>
              <div className="meta-data meta-author">
                <div className="meta-icon meta-icon-img">
                  <img src={blankProfilePictureUrl} alt={berita.author} />
                </div>
                <span className="meta-text">
                  {berita.author}
                </span>
              </div>
              <Link to={`/berita?kategori=${berita.category}`} className="meta-data meta-category">
                <div className="meta-icon">
                  <i><FontAwesomeIcon icon={faList}/></i>
                </div>
                <span className="meta-text">
                  {berita.category}
                </span>
              </Link>
            </li>
            <li>
              <div className="meta-data meta-date">
                <div className="meta-icon">
                  <i><FontAwesomeIcon icon={faClock}/></i>
                </div>
                <span className="meta-text">
                  {berita.updated_date ? formatDate(berita.updated_date) : formatDate(berita.post_date)}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-berita-content">
        {berita.news_content}
      </div>
    </article>
  )
}

export default DetailBeritaArticle