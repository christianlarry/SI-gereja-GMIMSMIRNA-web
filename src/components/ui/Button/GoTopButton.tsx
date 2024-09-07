import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './GoTopButton.css'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {createPortal} from 'react-dom'

const GoTopButton = ()=>{

  // STATE
  const [isScroll,setIsScroll] = useState(false)

  // EFFECT
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY >= 500) return setIsScroll(true)
      setIsScroll(false)
    }

    window.addEventListener('scroll',handleScroll)
    
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  const handleClick = ()=>window.scrollTo({top: 0,behavior:'smooth'})

  return createPortal(
    <AnimatePresence>
      {isScroll && 
        <motion.button 
        initial={{opacity: 0,y:50}}
        animate={{opacity: 1,y:0}}
        exit={{opacity: 0,y:50}}
        transition={{
          duration: 0.6
        }}
        className='go-top-button'
        onClick={handleClick}>
          <i><FontAwesomeIcon icon={faAnglesUp}></FontAwesomeIcon></i>
        </motion.button>
      }
    </AnimatePresence>,document.body)
}

export default GoTopButton