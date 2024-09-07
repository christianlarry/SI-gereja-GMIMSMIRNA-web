import { useContext } from "react"
import { TitleHeaderContext } from "../components/titleHeader/TitleHeaderContext"

export default ()=>{
  const context = useContext(TitleHeaderContext)
  if(!context) throw new Error('useTitleHeader must be used within TitleHeaderProvider!')
  return context
}