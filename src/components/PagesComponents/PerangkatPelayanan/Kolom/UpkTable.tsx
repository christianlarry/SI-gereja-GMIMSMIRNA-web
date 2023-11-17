import './UpkTable.css'

interface UpkTableProps{
  penatalayanan:string
  anggota:{
    nama_lengkap:string
    jabatan:string
  }[]
}

const UpkTable = ({penatalayanan,anggota}:UpkTableProps) => (
  <table className="pp_kolom-upk-table">
    <thead>
      <tr className="pp_kolom-upk-table-title">
        <th colSpan={2}>{penatalayanan}</th>
      </tr>
      <tr className="pp_kolom-upk-table-header">
        <th>Nama</th>
        <th>Jabatan</th>
      </tr>
    </thead>
    <tbody>
    {anggota.map((value,i)=>(
      <tr key={i}>
        <td>{value.nama_lengkap}</td>
        <td>{value.jabatan.split('-').map(text=>text[0].toUpperCase()+text.substring(1)).join(' ')}</td>
      </tr>
    ))}
    </tbody>
  </table>
)

export default UpkTable