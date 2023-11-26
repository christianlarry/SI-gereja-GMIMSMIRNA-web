import useSWR from "swr"
import PieChart from "../../components/chart/PieChart"
import FadeReveal from "../../components/reveal/FadeReveal"
import { getStatistikAnggotaJemaat } from "../../services/api"
import InternalServerError from "../../components/error/InternalServerError"
import DataLoader from "../../components/loader/DataLoader"
import StatistikCardLists from "../../components/StatistikCardLists"

import './DataJemaat.css'
import ProgressBarChartItem from "../../components/chart/ProgressBarChartItem"
import BipraStatistik from "../../components/PagesComponents/DataJemaat/BipraStatistik"

const DataJemaat = () => {
  const { data, error, isLoading } = useSWR('/api/anggotajemaat/statistik', getStatistikAnggotaJemaat)

  if (isLoading) return <DataLoader />

  if (error) return <InternalServerError message="Tidak bisa mendapatkan Data Jemaat. Coba refresh halaman." />

  if (data) return (
    <FadeReveal>
      <main className="container">
        <section className="data-jemaat_statistik-aj">
          <div className="data-jemaat_statistik-aj-start">
            <StatistikCardLists />
            <div className="data-jemat_chart-pb-container">
              <div className="data-jemaat_jk-chart">
                <PieChart data={{
                  labels: ['Laki-laki', 'Perempuan'],
                  datasets: [
                    {
                      label: 'Total Anggota Jemaat',
                      data: [
                        data.data.data.laki_laki,
                        data.data.data.perempuan
                      ],
                      borderWidth: 1
                    }
                  ]
                }} />
              </div>
              <div className="data-jemaat_bs-pb">
                <ProgressBarChartItem targetData={data.data.data.total} currentData={data.data.data.jumlah_baptis} desc="Jemaat Baptis" />
                <ProgressBarChartItem targetData={data.data.data.total} currentData={data.data.data.jumlah_sidi} desc="Sidi Jemaat" />
              </div>
            </div>
          </div>
          <div className="data-jemaat_statistik-aj-end">
            <BipraStatistik data={data.data.data}/>
          </div>
        </section>
      </main>
    </FadeReveal>
  )
}

export default DataJemaat