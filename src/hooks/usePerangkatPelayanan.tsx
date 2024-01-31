import { useContext } from "react";
import { PerangkatPelayananContext } from "../components/layouts/pageLayouts/LayoutPerangkatPelayanan";

export default function usePerangkatPelayanan(){
  const context = useContext(PerangkatPelayananContext)
  if(!context) throw new Error('usePerangkatPelayanan must be used within PerangkatPelayananProvider!')
  return context
}