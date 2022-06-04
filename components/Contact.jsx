import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";

const Contact = () => {

  return (
    <div id='#contact' className='max-w-xl  flex flex-col mt-16 p-5 pt-0 mx-auto justify-center items-center  text-gray-300'>
        <h1 className='text-2xl font-bold pb-12 '>Leave A Message</h1>

        <form className='flex flex-col w-full gap-2'>
            <div>
                <input type="text" placeholder='Name' className='w-full p-2 rounded' id="name" name="user_name"/>
            </div>
            <div>
                <input type="text" placeholder='Subject' className='w-full p-2 rounded'  id="subject" name="user_subject"/>
            </div>
            <div>
                <input type="email" placeholder='Email' className='w-full p-2 rounded'  required id="email" name="user_email"/>
            </div>
            <div>
                <textarea name="" id="" cols="30" rows="5" placeholder='Message' className='w-full p-2 rounded' ></textarea>
            </div>
            <div>
                <button  className='bg-orange-500  p-2 rounded text-xl font-normal text-white' id="msg" name="message">Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Contact