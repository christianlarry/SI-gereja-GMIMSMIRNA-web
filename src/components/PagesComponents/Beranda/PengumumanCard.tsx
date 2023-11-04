import './PengumumanCard.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'
import PengumumanModel from '../../../interfaces/PengumumanModel'
import { shortMonth, zeroPad } from '../../../utils/dateTimeFormat'
import {createPortal} from 'react-dom'
import { useState } from 'react'
import Modal from '../../modal/Modal'
import ModalHeader from '../../modal/ModalHeader'
import ModalContent from '../../modal/ModalContent'
import ModalHeaderTitle from '../../modal/ModalHeaderTitle'
import ModalHeaderSubtitle from '../../modal/ModalHeaderSubtitle'
import Paragraph from '../../Paragraph'
import UnderlineTextButton from '../../button/UnderlineTextButton'
import { AnimatePresence } from 'framer-motion'

interface PengumumanCardProps{
  data: PengumumanModel
}

const PengumumanCard = ({data}:PengumumanCardProps) => {

  const date:Date | null = data.tanggal_acara ? new Date(data.tanggal_acara) : null

  const [showModal,setShowModal] = useState(false)

  const handlePengumumanModal = ()=>setShowModal(true)

  return (
    <>
      <div className="pengumuman-card">
        <span>
          <i><FontAwesomeIcon icon={faBullhorn} /></i>
        </span>
        <div className="pengumuman-datetime">
          <div className="pengumuman-date">
            <p>{date ? `${zeroPad(date.getDate())} ${shortMonth(date.getMonth())}` : '-'}</p>
          </div>
          <div className="pengumuman-time">
            <p>{date ? `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())} WITA` : 'Informasi'}</p>
          </div>
        </div>
        <div className="pengumuman-title">
          <h1 title={data.judul}>{data.judul}</h1>
          <UnderlineTextButton onClick={handlePengumumanModal}>
            <span>Detail Pengumuman</span>
          </UnderlineTextButton>
        </div>
      </div>

      {createPortal(
        <AnimatePresence>
          {showModal &&
            <Modal size='md' onClose={()=>{setShowModal(false)}}>
              <ModalHeader>
                <ModalHeaderSubtitle subtitle='Pengumuman'/>
                <ModalHeaderTitle title={data.judul}/>
              </ModalHeader>
              <ModalContent>
                <Paragraph text={data.isi} color='dark-gray' style={{textAlign: 'justify'}}/>
              </ModalContent>
            </Modal>
          }
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default PengumumanCard