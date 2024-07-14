import './index.css'
import Home from "./components/home";
import FreeCourses from '../src/components/Course/Freecourse';
import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Signup from './components/login/signup'
import About from './components/about/about'
import { Toaster} from 'react-hot-toast';
import { UseAuth } from './authProvider';
function App() {

  const [authUser, setauthUser] = UseAuth()
  console.log(authUser)
  return (
    <>
    <main className='max-w-[1600px] m-auto'>

    <Routes>
          <Route path="/" element={ <Home/>} /> 
          <Route path="/courses" element={ authUser ? <FreeCourses />:<Navigate to="/signup" />} /> 
          <Route path="/signup" element={ <Signup />} /> 
          <Route path="/about" element={ <About />} /> 
    </Routes>
    <Toaster />
    </main>
    </>
  )
}

export default App
