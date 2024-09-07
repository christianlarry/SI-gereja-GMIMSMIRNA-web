import {createContext,useState} from 'react'

interface TitleHeaderContextType{
  title:string,
  setTitle:React.Dispatch<React.SetStateAction<string>>
}

export const TitleHeaderContext = createContext<TitleHeaderContextType | undefined>(undefined)

export const TitleHeaderProvider = ({children}:{children:React.ReactNode})=>{
  const [title,setTitle] = useState<string>('-')

  return (
    <TitleHeaderContext.Provider value={{
      title,
      setTitle
      }}>
        {children}
    </TitleHeaderContext.Provider>
  )
}