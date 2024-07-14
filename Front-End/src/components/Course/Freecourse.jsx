
import Card from '../../../src/components/card'
import Navbar from '../../../src/components/navbar'
import Footer from '../../../src/components/fotter'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Freecourse() {

      const [bookdata, setbookdata] = useState([])

      useEffect(()=>{
        const GetData = async() =>{
            try {
             const response =  await axios.get('http://localhost:4001/book');
             setbookdata(response.data)
            } catch (error) {
              console.log("error :" , error)
            }
        }
        GetData()
      },[])

  return (
      <>
      <Navbar/>
          <div className="free-course p-20 max-[786px]:px-[2rem] max-[500px]:px-[1rem]">
            <h1 className='text-3xl font-extrabold text-white-light max-[500px]:text-2xl'>courses we are recoumanded</h1>
            <p className='text-sm font-medium text-white-light my-4 max-[750px]:w-[100%] max-[500px]:text-[10px] max-[500px]:leading-[13px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis error eligendi, itaque neque porro sequi at reiciendis, beatae hic dolorum aperiam doloremque atque voluptates quos voluptas labore cupiditate assumenda ea!</p>
            <div className="row grid gap-[15px] grid-cols-4 gap-y-[40px] max-[1000px]:grid-cols-3 max-[852px]:grid-cols-2">
              {bookdata.map(item => (
              <div className="col">
                    <Card item={item} key={item.id}/>
              </div>
                ))}
              
            </div>
          </div>
          <Footer/>
      </>
  )
}

export default Freecourse

