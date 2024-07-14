import React from 'react'

function fotter() {
  return (
   <>
        <div className="fotter">
            <footer className='flex flex-col justify-center items-center py-6 px-[1rem]'>
                <div className="nav-links">
                    <ul className='flex gap-4 pb-4 items-center text-white-light font-bold text-sm max-[355px]:text-[12px] font-medium'>
                        <li><a href="">abouts us</a></li>
                        <li><a href="">contact us</a></li>
                        <li><a href="">jobs</a></li>
                        <li><a href="">press kit</a></li>
                    </ul>
                </div>
                <div className="social-icon flex gap-3 items-center py-[.6rem]">
                    <i className='fa-brands fa-facebook text-2xl text-white-light max-[355px]:text-[19px]'></i>
                    <i className='fa-brands fa-linkedin text-2xl text-white-light max-[355px]:text-[19px]'></i>
                    <i className='fa-brands fa-twitter text-2xl text-white-light max-[355px]:text-[19px]'></i>
                    <i className='fa-brands fa-instagram text-2xl text-white-light max-[355px]:text-[19px]'></i>
                </div>
                <div className="copy-right pt-3 text-white-light text-lg font-medium text-center max-[355px]:text-[14px]">
                    <p className='leading-[29px]'>copyright 2024 - allright resverved  by imran industries ltd</p>
                </div>
            </footer>
        </div>
   </>
  )
}

export default fotter
