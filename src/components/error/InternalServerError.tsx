import './FetchError.css'

const InternalServerError = ({message,onRefresh,refreshMessage}:{message:string,refreshMessage?:string,onRefresh?:()=>void}) => (
  <div className='fetch-error-wrapper'>
    <div className='fetch-error-title'>
      <h2>5<span>00</span></h2>
      <span>Internal Error</span>
    </div>
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