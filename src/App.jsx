import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import viteLogo from '/vite.svg'
import { Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Footer from './components/footer/Footer'
import './App.css'
function App() {
  return (
    <div classsName='app'>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/Cart' element={<Cart/>}/> */}
      {/* <Route path='/Order' element={<Order/>}/> */}
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
