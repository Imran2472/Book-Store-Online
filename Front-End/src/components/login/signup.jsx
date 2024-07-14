import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
const btn = "sign up"
import Login from './login'
import axios from 'axios'
import toast from 'react-hot-toast';

function signup() {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
      const UserInfo = {
        fullname : data.fullname,
        email: data.email,
        password : data.password,
      }
      await axios.post('http://localhost:4001/user/signup' , UserInfo)
      .then((res) =>{
        console.log(res.data)
        if(res.data){
      toast.success('Signup Successfully!')
      setTimeout(()=>{
        window.location.reload()
        window.location = "/"
      },2000)
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user))
      }).catch((error)=>{
        if(error.response){
          toast.error("Error:" + error.response.data.message)
        }
      })
    };
    return (
      <>
        <div className="signup w-[100%] py-[5rem] flex items-center justify-center px-[1rem]">
        <div className="w-[400px] overflow-y-hidden p-[2rem] border-[1px] border-slate-200 shadow-light-shadow rounded-3xl max-[454px]:w-[100%] max-[454px]:p-[1rem] relative">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
              <h3 className="font-bold text-2xl text-center">sign up Form</h3>
                <div className="inputs-fields flex flex-col gap-3 p-0">
                  <div className="name flex flex-col">
                  <label htmlFor="name" className='text-sm font-medium text-white-light py-2'>Name</label>
                  <input type="text" name="" id="name" placeholder='Enter Your Name' className='text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0'
                  {...register("fullname", { required: true })} />
                  {errors.fullname && <span className='text-red-600 text-sm font-medium p-2'>This field is required</span>}
                  </div>
                  <div className="email flex flex-col">
                  <label htmlFor="Email" className='text-sm font-medium text-white-light py-2'>Email</label>
                  <input type="email" name="" id="Email" placeholder='Enter Your Email' className='text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0'
                  {...register("email", { required: true })} />
                  {errors.email && <span className='text-red-600 text-sm font-medium p-2'>This field is required</span>}
                  </div>
                  <div className="password flex flex-col">
                    <label htmlFor="password" className='text-sm font-medium text-white-light py-2'>password</label>
                    <input type="password" name="" id="password" placeholder='Enter Your password'  className='text-sm normal-case font-medium px-[13px] py-[10px] border rounded-md w-[100%] m-0'
                    {...register("password", { required: true })}/>
                    {errors.password && <span className='text-red-600 text-sm font-medium p-2'>This field is required</span>}
                  </div>
                  <div className="button text-right">
                    <input type="submit" className='bg-pink hover:bg-pink-ho text-base px-[20px] py-[7px] capitalize cursor-pointer text-white rounded-lg' value={btn}/>
                  </div>
                      <div className="info text-center text-sm font-medium text-white-light">already have an account? <span className='text-blue-500 hover:underline cursor-pointer'  
                      onClick={()=>document.getElementById('my_modal_3').showModal()}>log in</span>
                      </div>{" "}
                      <Login/>
                </div>
                
            </form>
          </div>
        </div>
      </>
    )
  }

export default signup

