import Modal from './components/modal/index.jsx';
import { useState } from 'react';
import './App.css'

function App2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={()=>setIsOpen(true)}>Open Modal</button>
            {isOpen && Modal({children: 'Hello', onClose: ()=>setIsOpen(false)})}
        </>
    )
}

export default App2;
