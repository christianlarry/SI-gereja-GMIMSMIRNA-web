import { useContext } from "react";
import { PerangkatPelayananContext } from "../pages/PerangkatPelayanan/PerangkatPelayanan";

export default function usePerangkatPelayanan(){
  const context = useContext(PerangkatPelayananContext)
  if(!context) throw new Error('usePerangkatPelayanan must be used within PerangkatPelayananProvider!')
  return context
}