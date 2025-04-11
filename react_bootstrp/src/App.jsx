import 'bootstrap/dist/css/bootstrap.min.css';
import './dk.css'

import Home from './components/Pages/Home';
import {Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';
import Products from './components/Pages/Products';
import Contacts from './components/Pages/Contacts';
import SeparatedLink from './components/Pages/SeparatedLink';
import Something from './components/Pages/Something';

import Footer from './components/Footer/Footer';
import TopBavBar from './components/Header/TopBavBar';


function App() {
  return (
    <Fragment>
      <TopBavBar />
        <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path='/something' element={<Something/>}></Route>
          <Route path='/separated-link' element={<SeparatedLink/>}></Route>
          
          <Route path='*' element={<div><h1>404 Not Found</h1></div>}></Route>
          
        </Routes>
      <Footer />
    </Fragment>
  )
}

export default App;
