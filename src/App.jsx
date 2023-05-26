import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
//import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
//import { BeakerIcon } from '@heroicons/react/24/solid'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Header></Header>
      <div className='min-h-[calc(220vh-73px)]'>
        <Outlet />
      </div>
      <Footer></Footer>

    </>

  )
}

export default App;
