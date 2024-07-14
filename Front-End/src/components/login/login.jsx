import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
function login() {

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = async(data) => {
  const UserInfo = {
    email: data.email,
    password : data.password,
  }
  await axios.post('http://localhost:4001/user/login' , UserInfo)
  .then((res) =>{
    console.log(res.data)
    if(res.data){
      toast.success('Login Successfully!')
      document.getElementById('my_modal_3').close()
        setTimeout(()=>{
          window.location.reload()
          localStorage.setItem("Users", JSON.stringify(res.data.user))
        }, 1500)
    }
  }).catch((error)=>{
    if(error.response){
      console.log(error)
      toast.error("Error:" + error.response.data.message)
      setTimeout(()=>{},3000)
    }
  })
};
const btn = "log in"
return (
<>
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal px-[1rem]">
<div className="modal-box w-[400px] max-[454px]:w-[100%] max-[454px]:p-[1rem]">
  {/* if there is a button in form, it will close the modal */}
<Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
onClick={()=>document.getElementById('my_modal_3').close()}>✕</Link>
<form method="dialog" onSubmit={handleSubmit(onSubmit)}>


<h3 className="font-bold text-2xl text-center">Login Form</h3>
<div className="inputs-fields flex flex-col gap-3 p-0">
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
<button className='bg-pink hover:bg-pink-ho text-base px-[20px] py-[7px] capitalize cursor-pointer text-white rounded-lg' type='submit'>{btn}</button>
</div>
<div className="info flex items-center gap-2 justify-center text-center text-sm font-medium text-white-light">not registered ? 
<Link to="/signup" className='text-blue-500 hover:underline cursor-pointer'>sign up</Link>
</div>{" "}
</div>
</form>


</div>
</dialog>
</>
)
}

export default login
