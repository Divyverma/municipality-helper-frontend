import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage'
import Login from './component/Login'
import Register from './component/Register'
import SubmitProblem from './component/SubmitProblem'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Detail from './component/Detail'
import './index.css'

const App = () => {

  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/reportproblem' element={<SubmitProblem/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
