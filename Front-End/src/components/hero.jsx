import React from 'react'
import BooksImg from '../../src/images/banner.jpg'
function hero() {
  return (
   <>
            <div className="py-[50px] hero">
                <div className="row grid grid-cols-2 gap-1 items-center px-20 max-md:grid-cols-1 max-[786px]:px-[2rem] max-[500px]:px-[1rem]">
                    <div className="col">
                        <div className="content">
                            <h1 className='text-3xl font-extrabold text-white-light leading-9 max-[400px]:text-2xl max-[400px]:leading-8'>Hello Wellcome's Here to learn something <span className='text-pink'>new everyday !!!</span></h1>
                            <p className='text-sm leading-5 my-3 max-[400px]:text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nam qui tempore rerum, facere ipsam accusamus veritatis excepturi deleniti facilis aliquid dolor cupiditate repellat error?</p>
                            <div className="hero-search">
                            <label className="input input-bordered flex items-center gap-2">
                        <input type="email" className="grow" placeholder="Enter Your Email" />
                        </label>
                            </div>
                            <div className="button mt-6">
                                <a href="#" className='text-sm font-bold capitalize px-4 py-3 bg-pink text-white rounded-lg hover:bg-pink-ho'>submit now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src={BooksImg} alt=""  className='w-100'/>
                    </div>
                </div>
            </div>
   </>
  )
}

export default hero
