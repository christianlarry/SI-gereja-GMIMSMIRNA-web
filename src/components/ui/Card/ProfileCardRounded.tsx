import './ProfileCardRounded.css'

interface ProfileCardRounded{
  name:string
  desc?:string
  descDark?:boolean
  imageUrl?:string
}

const ProfileCardRounded = ({name,desc,descDark,imageUrl}:ProfileCardRounded)=>(
  <div>
    <img src={imageUrl ? imageUrl : 'images/no_profile_picture.png'} alt="Ketua BPMJ" className='profile-card-rounded-img'/>
    <div style={{marginTop: '10px'}}>
      <h2 className='profile-card-rounded-name'>{name}</h2>
      {desc && <span className={`profile-card-rounded-desc${descDark ? ' dark':''}`}>{desc}</span>}
    </div>
  </div>
)

export default ProfileCardRounded