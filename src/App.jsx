import React from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import  Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={< Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/home' element={<Home />}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
