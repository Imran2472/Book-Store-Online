import React from 'react'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Courses from "../components/courses";
import Fotter from "../components/fotter";
function home() {
  return (
    <>  
             <Navbar />
            <Hero/>
            <Courses/>
            <Fotter/>
    </>
  )
}

export default home
