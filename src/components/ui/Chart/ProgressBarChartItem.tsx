import { useEffect, useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './ProgressBarChartItem.css'
import Button from '../Button/Button'

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  targetData:number
  currentData:number
  desc:string
  color?:string
}

const ProgressBarChartItem = ({
  targetData,
  currentData,
  desc,
  color,
  ...props
}:Props) => {
  const [percentage,setPercentage] = useState(0)

  useEffect(()=>{
    setPercentage(Number(((currentData/targetData)*100).toFixed()))
  },[targetData,currentData])

  return (
    <div className="data-progress-bar" {...props}>
      <div className="data-progress-bar-data">
        <div>
          <Button tabIndex={-1} className='data-progress-bar-total-container' style={{backgroundColor: color}}>
            <span className='data-progress-bar-total'>{currentData}</span>
          </Button>
          <h2 className='data-progress-bar-desc'>{desc}</h2>
        </div>
        <span className="data-progress-bar-percentage">{percentage}%</span>
      </div>
      <ProgressBar progress={percentage} color={color}/>
    </div>
  )
}

export default ProgressBarChartItem