import { useEffect, useRef, KeyboardEvent, MouseEvent } from 'react'
import './Modal.css'
import FocusLock from 'react-focus-lock'
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

interface ModalProps{
  /**
   * Default fluid
   */
  onClose: ()=>void
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
  closeOnOutsideClick?:boolean
  noXMark?:boolean
  notCloseable?:boolean
}

const Modal = ({children,size,onClose,closeOnOutsideClick,noXMark,notCloseable}:ModalProps) => {
  // REF
  const modalContainerRef:React.RefObject<HTMLDivElement> = useRef(null)

  // EFFECT
  useEffect(() => {
    document.body.classList.add('overflow-h')

    return () => {
      document.body.classList.remove('overflow-h')
    }
  }, [])

  const handleModalKeyDown = (e:KeyboardEvent)=>{
    if(e.key === 'Escape'){
      onClose && onClose()
    }
  }

  const handleModalClick = (e:MouseEvent)=>{
    if(!modalContainerRef.current?.contains(e.target as Node)) onClose && onClose()
  }

  if(notCloseable){
    closeOnOutsideClick = false
    noXMark = true
  }

  return (
      <FocusLock>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        tabIndex={0} 
        className='modal' 
        onKeyDown={!notCloseable ? handleModalKeyDown : undefined} 
        onClick={closeOnOutsideClick ? handleModalClick : undefined}>

          <motion.div
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,y:0}}
          exit={{opacity:0,y:-100}}
          className={`modal-container${size ? ' '+size : ''}`} 
          ref={modalContainerRef}>
            
            {(!noXMark) && 
            <button className='modal-close-btn' onClick={()=>onClose()}><i>
              <FontAwesomeIcon icon={faXmark}/>
            </i></button>
            }

            <div className="modal-wrapper">
              {children}
            </div>

          </motion.div>

        </motion.div>
      </FocusLock>
  )
}

export default Modal