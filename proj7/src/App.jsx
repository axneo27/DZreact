import './App.css'
import About from './components/About'
import Privacy from './components/Privacy'
import Menu from './components/Menu'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        <header>
          <h1>Hello React</h1>
          <Menu></Menu>
        </header>
        <main>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/privacy" element={<Privacy/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </main>
      </div>
    </>
  )
}

export default App
