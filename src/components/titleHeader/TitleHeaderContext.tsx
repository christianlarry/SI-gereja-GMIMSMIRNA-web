import {createContext,useContext,useState} from 'react'

interface TitleHeaderContextType{
  title:string,
  setTitle:React.Dispatch<React.SetStateAction<string>>
}

const TitleHeaderContext = createContext<TitleHeaderContextType | undefined>(undefined)

export const useTitleHeader = ()=>{
  const context = useContext(TitleHeaderContext)
  if(context === undefined) throw new Error('TitleHeaderContext must be used within a TitleHeaderProvider')
  return context
}

export const TitleHeaderProvider = ({children}:{children:React.ReactNode})=>{
  const [title,setTitle] = useState<string>('-')

  return (
    <TitleHeaderContext.Provider value={{title,setTitle}}>
      {children}
    </TitleHeaderContext.Provider>
  )
}