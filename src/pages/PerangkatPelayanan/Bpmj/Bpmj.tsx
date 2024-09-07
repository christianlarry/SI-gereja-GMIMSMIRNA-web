import ProfileCard from "../../../components/ui/Card/ProfileCard"
import FadeReveal from "../../../components/reveal/FadeReveal"

const Bpmj = () => (
  <FadeReveal>
    <main>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4rem' }}>
        <div>
          <ProfileCard nama="Pdt. Gammy R.B. Porong, S.Th." desc="Ketua" picture_url="/images/bpmj/ketua.jpg" />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>
          <ProfileCard nama="Pnt. Prof. Ferdinand Kerebungu, M.Si " desc="Wakil Ketua" picture_url="/images/bpmj/wakil_ketua.jpg" />
          <ProfileCard nama="Pnt. Dr. Ir. Ari B. Rondonuwu, M.Sc,M.Si." desc="Sekretaris" picture_url="/images/bpmj/sekretaris.jpg" />
          <ProfileCard nama="Dkn. Innov Th. Walelang, S.Sos,M.Si" desc="Bendahara" picture_url="/images/bpmj/bendahara.png" />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>
          <ProfileCard nama="Pnt. Dr. Jemmy Kumendong,MSi." desc="Anggota" picture_url="/images/bpmj/anggota1.jpg" />
          <ProfileCard nama="Dkn. Conny Lantang" desc="Anggota" picture_url="/images/bpmj/anggota2.jpg" />
          <ProfileCard nama="Pnt. Dr. Aswin Mondolang,M.Pd." desc="Anggota" picture_url="/images/bpmj/anggota3.png" />
        </div>
      </div>
    </main>
  </FadeReveal>
)

export default Bpmj