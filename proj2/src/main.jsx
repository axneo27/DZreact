import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App1.jsx'
import App23 from './App23.jsx'
import App4 from './App4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App4 />
  </StrictMode>,
)
