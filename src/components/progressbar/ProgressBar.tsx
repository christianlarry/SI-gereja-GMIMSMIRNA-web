import { useEffect, useRef } from 'react'
import './ProgressBar.css'

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  progress: number
  color?: string
}

const ProgressBar = ({ progress, color, ...props }: ProgressBarProps) => {

  const progressBarRef:React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(()=>{
    if(progressBarRef.current){
      progressBarRef.current.style.width = `${progress}%`
    }
  },[progress])

  return (
    <div className="progress-bar-container" {...props}>
      <div className="progress-bar" ref={progressBarRef} style={{backgroundColor: color}}></div>
    </div>
  )
}

export default ProgressBar