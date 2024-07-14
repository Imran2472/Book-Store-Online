import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Login from '../../src/components/login/login'
import { UseAuth } from '../authProvider';
import Logout from './logout/logout'
function navbar() {

    const [authUser, setauthUser] = UseAuth()
      // console.log(authUser.email)
  const [open, setopen] = useState(false)

 function OpenMenu(){
  setopen(open => !open)
}
let ActiveClass = open ? 'active' : null;

  
  return (
  <>
        <header className='border-b'>
          <nav className='flex justify-between items-center px-20 py-4'>
            <div className="logo">
              <h1 className='text-xl font-semibold cursor-pointer text-white-light logo'>Book Store</h1>
            </div>
            <div className="navigation flex gap-2 items-center max-sm:gap-1">
              <ul className={`flex items-center1 ${ActiveClass}`}>
                <li><Link to="/" className='text-sm p-3 rounded-lg hover:bg-back-light text-white-light font-medium capitalize'>Home</Link></li>
                <li><Link to="/about" className='text-sm p-3 rounded-lg hover:bg-back-light text-white-light font-medium capitalize'>about</Link></li>
                <li><Link className='text-sm p-3 rounded-lg hover:bg-back-light text-white-light font-medium capitalize' to="/courses">courses</Link></li>
                <li><Link className='text-sm p-3 rounded-lg hover:bg-back-light text-white-light font-medium capitalize'>contact</Link></li>
                <div className="close-bar hidden" onClick={OpenMenu}>
                <i className='fa-solid fa-xmark h-10 w-10 rounded-full flex justify-center items-center'></i>
              </div>
              </ul>
              <div className="search md:hidden lg:block">
              <label className="input-bordered flex items-center gap-2 px-3 py-2 rounded-lg border">
              <input type="text" className="grow w-100 h-100 outline-none border-none bg-transparent text-sm" placeholder="Search"/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
              </div>
              <div className="search-icon hidden">
              <i className="fa-solid fa-magnifying-glass text-base"></i>
              </div>
              <div className="dark flex items-center justify-center">
                          <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
              </div>
              {
                authUser? <Logout/> : 
                <div className="button logout">
                <button className='px-4 py-2 bg-back-light text-white-light cursor-pointer rounded-lg text-base font-semibold hover:bg-back-hovered max-sm:text-bold max-sm:text-sm max-sm:font-normal max-sm:px-2 max-sm:py-1 button' onClick={()=>document.getElementById('my_modal_3').showModal()}>log in</button>
                <Login />
              </div>
              
              }
              <div className="menu-bar hidden" onClick={OpenMenu}>
                <i className='fa-solid fa-bars h-10 w-10 rounded-full flex justify-center items-center bg-back-light sm:text-sm sm:h-7 sm:w-7'></i>
              </div>
            </div>
          </nav>
        </header>
  </>
  )
}

export default navbar

