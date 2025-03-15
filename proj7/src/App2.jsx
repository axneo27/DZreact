import './App.css'
import Biography from './components/task/Biography'
import BestPicture from './components/task/BestPicture'
import Pictures from './components/task/Pictures'
import HomePage from './components/task/HomePage'
import Menu2 from './components/task/Menu2'
import NotFound from './components/NotFound'

import { Route, Routes } from 'react-router-dom'
function App2() {

  return (
    <>
      <div className="App">
        <header>
          <h1>Pablo Picasso</h1>
          <Menu2></Menu2>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/biography" element={<Biography/>}></Route>
                <Route path="/best-picture" element={<BestPicture/>}></Route>
                <Route path="/pictures" element={<Pictures/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </main>
      </div>
    </>
  )
}

export default App2
