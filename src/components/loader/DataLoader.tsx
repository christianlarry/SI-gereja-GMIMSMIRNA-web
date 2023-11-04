import spinnerGif from '../../assets/images/loader/spinner-2.svg'

import './DataLoader.css'

const DataLoader = ({message}:{message?:string}) => (
  <div className='data-loader'>
    <img className='data-loader-img' src={spinnerGif}/>
    {message && <span className='data-loader-message'>{message}</span>}
  </div>
)

export default DataLoader