import React from 'react'
import { UseAuth } from '../../authProvider';
import toast from 'react-hot-toast';
function logout() {
    const [authUser, setauthUser] = UseAuth();
    function Logout(){
        try {
            setauthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            setTimeout(()=>{
                window.location = "/signup"
            window.location.reload()
            }, 1500)
            toast.success("logged out Successfully")
        } catch (error) {
            toast.error("Error : " + error.message)
        }
    }
  return (
    <>
            <button className='px-4 py-2 cursor-pointer rounded-lg text-base font-semibold max-sm:text-bold max-sm:text-sm max-sm:font-normal max-sm:px-2 max-sm:py-1 button bg-red-600 text-white' onClick={Logout}>log out</button>
    </>
  )
}

export default logout
