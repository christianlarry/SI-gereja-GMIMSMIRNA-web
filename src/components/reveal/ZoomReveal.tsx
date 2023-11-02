import { motion } from "framer-motion"

interface ZoomRevealProps{
  children: React.ReactNode
  scaleFrom: number
  duration?:number
  delay?:number
  notOnce?:boolean
}

const ZoomReveal = ({children,scaleFrom,delay,duration,notOnce}:ZoomRevealProps)=>(
  <motion.div
  initial={{opacity: 0,scale:scaleFrom}}
  whileInView={{opacity: 1,scale:1}}
  viewport={{once: (notOnce === undefined) && true}}
  transition={{
    ease: 'easeInOut',
    duration: duration || 0.6,
    delay: delay
  }}>
    {children}
  </motion.div>
)

export default ZoomReveal