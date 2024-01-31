import './FetchError.css'
import InternalServerErrorLogo from './logo/InternalServerErrorLogo'

const InternalServerError = ({message,onRefresh,refreshMessage}:{message:string,refreshMessage?:string,onRefresh?:()=>void}) => (
  <div className='fetch-error-wrapper'>
    <InternalServerErrorLogo/>
    <span className='fetch-error-status'>Something Went Wrong :(</span>
    <span className='fetch-error-message'>
      {message}
      {refreshMessage && (
        <>
          <span> </span>
          <span className='fetch-error-refresh' onClick={onRefresh && (()=>{onRefresh()})}>{refreshMessage}</span>
        </>
      )}
    </span>
  </div>
)

export default InternalServerError