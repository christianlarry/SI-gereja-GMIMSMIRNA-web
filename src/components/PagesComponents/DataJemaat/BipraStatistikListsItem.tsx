import Button from "../../button/Button"

interface Props{
  kategori:string
  total:number
  persentase:number
}

const BipraStatistikListsItem = ({kategori,total,persentase}:Props) => (
  <li>
    <div>
      <Button style={{
        cursor: 'pointer',
        pointerEvents: 'none',
        marginRight: '5px',
        backgroundColor: window.getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary-light').trim()
      }}>
        <span className="data-jemaat_bl-total">{total}</span>
      </Button>
      <span className="data-jemaat_bl-desc">{kategori}</span>
    </div>
    <span className="data-jemaat_bl-percentage">{persentase}%</span>
  </li>
)

export default BipraStatistikListsItem