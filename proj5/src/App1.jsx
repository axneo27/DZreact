import React, {useRef} from 'react';
import './App.css'

function App1() {
  const searchInput = useRef(null)

  return (
    <>
      <input type="text" ref={searchInput} />
      <button onClick={() => searchInput.current.focus()}>Focus</button>
      <button onClick={() => searchInput.current.blur()}>Blur</button>
    </>
)
}

export default App1;
