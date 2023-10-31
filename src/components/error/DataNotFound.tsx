import './DataNotFound.css'

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
    <div className={`data-not-found-wrapper${className ? ' '+className : ''}`} {...props}>
      <div className='data-not-found-title'>
        <h2>4<span>0</span>4</h2>
        <span>Not Found</span>
      </div>
      <span className='data-not-found-status'>Data Tidak Ditemukan</span>
      <span className='data-not-found-message'>
        {message}
        {refreshMessage && (
          <>
            <span> </span>
            <span className='data-not-found-refresh' onClick={onRefresh && handleRefreshClick}>{refreshMessage}</span>
          </>
        )}
      </span>
    </div>
  )
}

export default DataNotFound