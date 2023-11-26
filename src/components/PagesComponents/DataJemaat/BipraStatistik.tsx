import './BipraStatistik.css'

import AsideTitle from "../../aside/AsideTitle"
import BipraStatistikListsItem from './BipraStatistikListsItem'
import { AnggotaJemaatStatistikModel } from '../../../interfaces/api/AnggotaJemaatModel'

const BipraStatistik = ({data}:{data:AnggotaJemaatStatistikModel}) => {
  return (
    <div className="data-jemaat_bipra-lansia">
      <AsideTitle text="BIPRA Dan Lansia" />
      <ul className="data-jemaat_bl-lists">
        <BipraStatistikListsItem kategori='Pria/Kaum Bapa' total={data.bapak} persentase={Number(((data.bapak/data.total)*100).toFixed())}/>
        <BipraStatistikListsItem kategori='Wanita/Kaum Ibu' total={data.ibu} persentase={Number(((data.ibu/data.total)*100).toFixed())}/>
        <BipraStatistikListsItem kategori='Pemuda' total={data.pemuda} persentase={Number(((data.pemuda/data.total)*100).toFixed())}/>
        <BipraStatistikListsItem kategori='Remaja' total={data.remaja} persentase={Number(((data.remaja/data.total)*100).toFixed())}/>
        <BipraStatistikListsItem kategori='Anak' total={data.anak} persentase={Number(((data.anak/data.total)*100).toFixed())}/>
        <BipraStatistikListsItem kategori='Lansia' total={data.lansia} persentase={Number(((data.lansia/data.total)*100).toFixed())}/>
      </ul>
    </div>
  )
}

export default BipraStatistik