import { motion,EasingDefinition } from "framer-motion"

interface FadeRevealProps{
  children: React.ReactNode
  duration?:number
  delay?:number
  notOnce?:boolean
  ease?: EasingDefinition
}

const FadeReveal = ({children,duration,delay,notOnce,ease}:FadeRevealProps)=>{
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: (notOnce === undefined) && true}}
      transition={{
        ease: !ease && 'easeInOut',
        duration: duration || 0.6,
        delay: delay
      }}>
      {children}
    </motion.div>
  )
}

export default FadeReveal