import ReactDOM from 'react-dom';
import './style.css';

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className='modal-overlay' onClose={onClose} onClick={console.log('modal clicked')}>
        <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
            <button className='modal-close' onClick={onClose}>X</button>
            {children}
        </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal;