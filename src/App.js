import './App.css';
import React from 'react'
import Dopair from './pages/Dopair';
import { Route, Routes } from 'react-router-dom';
import Showcase from './pages/Showcase';
import About from './pages/About';


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Dopair />} />
        <Route path='/showcase' element={<Showcase />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </React.Fragment>
  )
}

export default App