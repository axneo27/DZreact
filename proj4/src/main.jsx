import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App1 from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import { ThemeProvider } from './components/ThemeContext/index.jsx'
import App4 from './App4.jsx'
import App5 from './App5.jsx'
import { ChatProvider } from './components/ChatContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App1 /> */}
    {/* <App2 /> */}
    {/* <ThemeProvider>
      <App3 />
    </ThemeProvider> */}
    {/* <App4 /> */}
    <ChatProvider>
      <App5 />
    </ChatProvider>
  </StrictMode>,
)
