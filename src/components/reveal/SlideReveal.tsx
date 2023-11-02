import { Variant, motion } from "framer-motion"

interface SlideRevealProps{
  children: React.ReactNode
  direction: "x"|"y"
  translateFrom: number
  duration?:number
  delay?:number
  notOnce?:boolean
}

const SlideReveal = ({children,direction,translateFrom,duration,delay,notOnce}:SlideRevealProps)=>{

  let variant:{hidden:Variant,visible:Variant} = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }
  let viewport:{once:boolean,margin?:string} = {
    once: (notOnce === undefined) && true
  }

  switch(direction){
    case "x":
      variant = {
        hidden: {x: translateFrom, opacity: 0},
        visible:{x: 0,opacity: 1}
      }
      break
    case "y":
      variant = {
        hidden: {y: translateFrom, opacity: 0},
        visible:{y: 0,opacity: 1}
      }
      viewport.margin = `0px 0px ${translateFrom}px 0px`
      break
    default:
      throw new Error('Invalid Slide Reveal Direction!')
  }

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        ease: 'easeInOut',
        duration: duration || 0.6,
        delay: delay
      }}
    >
      {children}
    </motion.div>
  )
}

export default SlideReveal