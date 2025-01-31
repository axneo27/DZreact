import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppClass2 from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AppClass2/>
  </StrictMode>
)
