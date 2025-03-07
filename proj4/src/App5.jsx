import React, {useState, useContext} from 'react';
import {ChatContext} from './components/ChatContext/index.jsx';

function App5() {
    const {messages, addMessage} = useContext(ChatContext);
    const [message, setMessage] = useState('');

    const handleSetMessage = () => {
        if (message.trim() !== '') {
            addMessage(message);
            setMessage('');
        }
    };

    return (
        <>
            <div>
                <h2>chat</h2>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
                <div>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Input message..."
                    />
                    <button onClick={handleSetMessage}>Send</button>
                </div>
            </div>
        </>
    );
}   

export default App5;