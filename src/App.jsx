import { useState } from 'react';

import './App.css'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Services from './components/services/services';
import Footer from './components/footer/footer';
import Portfolio from './components/portfolio/portfolio';
// import Footer from './components/footer/footer';
// import { Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/aboutus' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    <Footer/>
    {/* <Portfolio/> */}
    </>
  )
}

export default App
