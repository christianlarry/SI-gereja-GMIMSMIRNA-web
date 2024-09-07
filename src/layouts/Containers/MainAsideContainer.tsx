import { useEffect, useRef } from 'react'
import './MainAsideContainer.css'

interface Props{
  children: React.ReactNode
  /**
   * default 1000px
   */
  wrapWidth?: number
}

const MainAsideContainer = ({
  children,
  wrapWidth=1000,
}:Props)=>{

  const containerRef:React.RefObject<HTMLDivElement> = useRef(null)

  const handleResize = ()=>{
    const wrapClassName = 'wrap-vt'

    if(containerRef.current){
      if(window.innerWidth <= wrapWidth && !containerRef.current.classList.contains(wrapClassName)){

        containerRef.current.classList.add(wrapClassName)
      }else if(window.innerWidth > wrapWidth && containerRef.current.classList.contains(wrapClassName)){
        containerRef.current.classList.remove(wrapClassName)
      }
    }
  }
  
  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)

    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
  
  return (
    <div className='main-aside-container' ref={containerRef}>
      {children}
    </div>
  )
}

export default MainAsideContainer