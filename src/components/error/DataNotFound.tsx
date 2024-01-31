import './FetchError.css'
import NotFoundErrorLogo from './logo/NotFoundErrorLogo'

interface DataNotFoundProps extends React.HTMLAttributes<HTMLDivElement>{
  message:string
  refreshMessage?:string
  onRefresh?:()=>void
}

const DataNotFound = ({message,className,refreshMessage,onRefresh,...props}:DataNotFoundProps)=>{

  const handleRefreshClick = ()=>{
    onRefresh && onRefresh()
  }

  return (
    <div className={`fetch-error-wrapper${className ? ' '+className : ''}`} {...props}>
      <NotFoundErrorLogo/>
      <span className='fetch-error-status'>Data Tidak Ditemukan</span>
      <span className='fetch-error-message'>
        {message}
        {refreshMessage && (
          <>
            <span> </span>
            <span className='fetch-error-refresh' onClick={onRefresh && handleRefreshClick}>{refreshMessage}</span>
          </>
        )}
      </span>
    </div>
  )
}

export default DataNotFound