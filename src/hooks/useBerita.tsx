import { useContext } from "react";
import { BeritaContext } from "../layouts/PageLayouts/LayoutBerita";

const useBerita = ()=>{
  const context = useContext(BeritaContext);
  if(!context) throw new Error('useBerita must be used within BeritaContextProvider!')
  return context
}

export default useBerita