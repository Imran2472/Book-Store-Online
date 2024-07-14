import React from 'react'
import Navbar from '../navbar'
import Footer from '../fotter'
import AboutImg from '../../images/about.png'
import {Link} from 'react-router-dom'
function about() {
  return (
    <>

    <Navbar />
    <div className="content-about px-20 py-[100px] max-[786px]:px-[2rem] max-[500px]:px-[1rem]">
        <div className="row grid grid-cols-2 gap-[2rem] items-center max-[786px]:grid-cols-1 max-[786px]:gap-[3rem]">
            <div className="col">
                <div className="content">
                    <h1 className='text-3xl text-white-light font-bold cursor-pointer max-[500px]:text-2xl'>Welcome To <span className='text-pink'>My Website</span></h1>
                    <div className="line"></div>
                    <p className='mt-2 text-sm text-white-light font-normal  max-[1000px]:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi, quibusdam doloremque tenetur hic porro reiciendis distinctio praesentium quos assumenda natus, ducimus voluptates placeat magni. orem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi, quibusdam doloremque tenetur hic porro reiciendis distinctio praesentium quos assumenda natus, ducimus voluptates placeat magniorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi, quibusdam doloremque tenetur hic porro reiciendis distinctio praesentium quos assumenda natus, ducimus voluptates placeat magniorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi, quibusdam doloremque tenetur hic porro reiciendis distinctio praesentium quos assumenda natus, ducimus voluptates placeat magni</p>
                    <div className="button mt-[1rem]">
                        <Link className='bg-pink px-[2rem] py-[10px] text-white text-sm font-medium rounded-lg tracking-[2px] hover:bg-pink-ho transition duration-150 ease-in-out'>Hire Me</Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={AboutImg} alt=""  className='w-[100%] shadow-light-shadow rounded-xl'/>
            </div>
        </div>
    </div>
    <Footer />

</>
  )
}

export default about


