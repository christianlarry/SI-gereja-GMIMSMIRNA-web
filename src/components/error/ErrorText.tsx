import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ErrorText.css'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const ErrorText = ({text}:{text:string})=>(
  <span className='error-text'>
    <i><FontAwesomeIcon icon={faCircleExclamation}/></i>
    {text}
  </span>
)

export default ErrorText