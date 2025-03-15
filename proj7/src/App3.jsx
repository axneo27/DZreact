import './App.css'
import Menu3 from './components/task2/Menu3'
import Home3 from './components/task2/Home3'
import GreatWall from './components/task2/GreatWall'
import Chichen from './components/task2/Chichen'
import Christ from './components/task2/Christ'
import Colosseum from './components/task2/Colosseum'
import Machu from './components/task2/Machu'
import Petra from './components/task2/Petra'
import TajMahal from './components/task2/TajMahal'

import NotFound from './components/NotFound'

import { Route, Routes } from 'react-router-dom'
function App3() {

  return (
    <>
      <div className="App">
        <header>
          <h1>7 Wonders of the world</h1>
          <Menu3></Menu3>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home3/>}></Route>
                <Route path='/great-wall' element={<GreatWall/>}></Route>
                <Route path='/chichen' element={<Chichen/>}></Route>
                <Route path='/petra' element={<Petra/>}></Route>
                <Route path='/machu' element={<Machu/>}></Route>
                <Route path='/christ' element={<Christ/>}></Route>
                <Route path='/colosseum' element={<Colosseum/>}></Route>
                <Route path='/taj-mahal' element={<TajMahal/>}></Route>

                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </main>
      </div>
    </>
  )
}

export default App3
