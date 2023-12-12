import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TotalArrived from './uiConponent/BookingH/TotalArrived'
import Appointment from './uiConponent/BookingH/Appointment'
import Signup from './From/Signup'
import Signin from './From/Signin'
import SaidBar from './uiConponent/Home/SaidBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import ForgetPass from './From/ForgetPass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='./logout' element={<ForgetPass/>}/>
      </Routes>
    
    </BrowserRouter>
    {/*
      */}
     {/* <TotalArrived/>  */}
     {/* <Appointment/> */}
     {/* <Signup/> */}
     {/* <Signin/> */}
     {/* <SaidBar/> */}
    </>
  )
}

export default App
