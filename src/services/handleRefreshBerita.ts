import { KeyedMutator } from "swr";
import { BeritaResponseModel } from "../interfaces/api/BeritaModel";
import { toastError } from "../utils/toast";

const handleRefreshBerita = (
  mutate:KeyedMutator<BeritaResponseModel>)=>{
    return ()=>{
      mutate()
        .then(val=>{
          if(val && val.data.length === 0) return toastError('Belum ada berita yang diposting')
          if(!val) return toastError('Terjadi kesalahan saat mendapatkan data')
        })
        .catch(()=>toastError('Terjadi kesalahan saat mendapatkan data'))
    }
}

export default handleRefreshBerita