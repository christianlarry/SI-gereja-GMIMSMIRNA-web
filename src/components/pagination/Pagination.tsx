import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Pagination.css'
import PaginationButton from './PaginationButton'
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface PaginationProps{
  current: number
  totalPages: number
  /**
   * default 9
   */
  limit?: number
  onPageChange: (page: number) => void 
}

const Pagination = ({
  current,
  totalPages,
  limit = 9,
  onPageChange
}:PaginationProps)=>{

  const [midPage,_setMidPage] = useState<number>(Math.ceil(limit/2))

  const generatePagination = ():React.ReactNode[]=>{
    const paginationItems:React.ReactNode[] = []

    // KETIKA TOTAL HALAMAN(TOTAL PAGES) MASIH DIBAWAH BATAS HALAMAN YANG AKAN DITAMPILKAN(LIMIT) MAKA INDEX 1-LIMIT
    if(totalPages <= limit){
      for(let i = 1; i <= totalPages; i++){
        paginationItems.push(
          <PaginationButton
            key={i}
            active={i === current}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PaginationButton>
        )
      }
      return paginationItems
    }
    
    // KETIKA CURRENT PAGE MASIH DIBAWAH TENGAH DARI LIMIT
    if(current <= midPage){
      for(let i=1;i<=limit;i++){
        const index = i

        paginationItems.push(
          <PaginationButton 
            key={index} 
            active={index === current} 
            onClick={()=>onPageChange(index)}
          >
            {index}
          </PaginationButton>
        )
      }

      return paginationItems
    }

    for(let i=1;i<=limit;i++){
      const index = current-(midPage-i)

      if(index >= totalPages){
        paginationItems.length = 0
        
        for(let j=1;j<=limit;j++){
          const index = totalPages-limit+j
          paginationItems.push(
            <PaginationButton 
              key={index}
              active={index === current} 
              onClick={()=>onPageChange(index)}
            >
              {index}
            </PaginationButton>
          )
        }
        
        break
      }

      paginationItems.push(
        <PaginationButton 
          key={index} 
          active={index === current} 
          onClick={()=>onPageChange(index)}
        >
          {index}
        </PaginationButton>
      )
    }

    return paginationItems
  }

  return (
    <div className='pagination-container'>
      {totalPages > limit &&
      <PaginationButton disabled={current<midPage} onClick={()=>onPageChange(1)}>
        <i><FontAwesomeIcon icon={faAnglesLeft}/></i>
      </PaginationButton>
      }

      {totalPages != 1 &&
      <PaginationButton disabled={current === 1} onClick={()=>onPageChange(current-1)}>
        <i><FontAwesomeIcon icon={faAngleLeft}/></i>
      </PaginationButton>
      }

      <div className='pagination-index'>
        {generatePagination()}
      </div>

      {totalPages != 1 &&
      <PaginationButton disabled={current === totalPages} onClick={()=>onPageChange(current+1)}>
        <i><FontAwesomeIcon icon={faAngleRight}/></i>
      </PaginationButton>
      }

      {totalPages > limit &&
      <PaginationButton disabled={current>(totalPages-midPage)} onClick={()=>onPageChange(totalPages)}>
        <i><FontAwesomeIcon icon={faAnglesRight}/></i>
      </PaginationButton>
      }
    </div>
  )
}

export default Pagination