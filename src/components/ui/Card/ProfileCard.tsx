import { blankProfilePictureUrl } from '../../../services/api'
import './ProfileCard.css'

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement>{
  nama:string
  desc?:string
  picture_url?:string
}

const ProfileCard = ({nama,desc,picture_url,...props}:ProfileCardProps) => (
  <div className="profile-card-container" {...props}>
    <div className="profile-card-image-wrapper">
      <img className='profile-card-image' src={picture_url ? picture_url : blankProfilePictureUrl} alt={`${nama} foto`} />
    </div>
    <div className="profile-card-data">
      <h2 className="profile-card-data-nama">{nama}</h2>
      {desc && <span className="profile-card-data-desc">{desc}</span>}
    </div>
  </div>
)

export default ProfileCard