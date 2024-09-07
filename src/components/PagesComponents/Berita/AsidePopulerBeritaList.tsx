import AsideArticleCard from '../../aside/AsideArticleCard'
import './AsidePopulerBeritaList.css'
import { shortMonth, zeroPad } from '../../../utils/dateTimeFormat'
import DataLoader from '../../ui/Loader/DataLoader'
import ErrorText from '../../error/ErrorText'

// IMPORT FETCH FUNCTIONS
import { getBeritaPopuler } from '../../../services/api'

const AsidePopulerBeritaList = () => {
  // SWR GET DATA
  const beritaPopuler = getBeritaPopuler()

  if((beritaPopuler.isLoading || beritaPopuler.isValidating)) return <DataLoader/>

  if(beritaPopuler.error) return <ErrorText text='Terjadi kesalahan mendapatkan data!'/>

  if(beritaPopuler.data) return (
    <div className="aside-berita-list">

      {beritaPopuler.data.data.map(berita => {
        const dateObject = new Date(berita.post_date)
        const date = `${zeroPad(dateObject.getDate())} ${shortMonth(dateObject.getMonth())} ${dateObject.getFullYear()}`

        return (
          <AsideArticleCard key={berita.id}
            imageUrl={berita.thumb_url}
            title={berita.news_title}
            views={berita.views_count}
            date={date}
            href={`/berita/${berita.id}`}
          />
        )
      })}

    </div>
  )
}

export default AsidePopulerBeritaList