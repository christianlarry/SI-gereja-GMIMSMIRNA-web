import './ProfileCardRounded.css'

interface ProfileCardRounded{
  name:string
  desc?:string
  imageUrl?:string
}

const ProfileCardRounded = ({name,desc,imageUrl}:ProfileCardRounded)=>(
  <>
    <img src={imageUrl ? imageUrl : 'images/no_profile_picture.png'} alt="Ketua BPMJ" loading="lazy" className='profile-card-rounded-img'/>
    <div style={{marginTop: '10px'}}>
      <h2 className='profile-card-rounded-name'>{name}</h2>
      {desc && <span className='profile-card-rounded-desc'>{desc}</span>}
    </div>
  </>
)

export default ProfileCardRounded