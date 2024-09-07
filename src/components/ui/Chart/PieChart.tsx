import { ChartData, ChartOptions } from "chart.js"
import { Pie } from "react-chartjs-2"

const PieChart = ({data}:{data:ChartData<'pie'>})=>{
  const options:ChartOptions<'pie'>={
    plugins:{
      legend:{
        position: 'right',
        onClick: ()=>{},
        labels:{
          font:{size: 14,family: 'Poppins'},
          boxWidth: 30,
          boxHeight: 18
        }
      }
    }
  }

  return <Pie data={data} options={options}/>
}

export default PieChart