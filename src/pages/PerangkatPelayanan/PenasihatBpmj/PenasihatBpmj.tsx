import ProfileCard from "../../../components/ui/Card/ProfileCard"
import FadeReveal from "../../../components/reveal/FadeReveal"

const PenasihatBpmj = ()=>{
  return (
    <FadeReveal>
      <main style={{display:'flex',alignItems:'center'}}>
        <div style={{display:'flex',justifyContent:'center',gap:'6rem',flexWrap:'wrap'}}>
          <ProfileCard nama="Bpk. Alex Titing,SH." picture_url="/images/penasihat-bpmj/alex_titing.jpg"/>
          <ProfileCard nama="Ibu. Lotje Pinasang,SH." picture_url="/images/penasihat-bpmj/ibu_dapu.jpg"/>
        </div>
      </main>
    </FadeReveal>
  )
}

export default PenasihatBpmj