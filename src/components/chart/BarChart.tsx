import { ChartData,ChartOptions } from "chart.js"
import { Bar } from "react-chartjs-2"

interface Props{
  data:ChartData<'bar'>
}

const BarChart = ({data}:Props)=>{
  const options:ChartOptions<'bar'>={}

  return <Bar data={data} options={options}/>
}

export default BarChart