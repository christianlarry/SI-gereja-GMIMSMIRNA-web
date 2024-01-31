import './FetchError.css'
import BadRequestErrorLogo from './logo/BadRequestErrorLogo'

interface BadRequestErrorProps extends React.HTMLAttributes<HTMLDivElement>{
  message:string
}

const BadRequestError = ({message,className,...props}:BadRequestErrorProps)=>{
  return (
    <div className={`fetch-error-wrapper${className ? ' '+className : ''}`} {...props}>
      <BadRequestErrorLogo/>
      <span className='fetch-error-status'>Permintaan Tidak Valid</span>
      <span className='fetch-error-message'>
        {message}
      </span>
    </div>
  )
}

export default BadRequestError