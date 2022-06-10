import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const notify = () => toast.success("Message sent successfully!",{position:toast.POSITION.BOTTOM_CENTER, autoClose:3000});
 

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_mxmr2qa', 'template_xizfs9p', form.current, 'JNZRiezRl7BWwEVTW')
        .then((result) => {
            console.log(result.text);
            // window.location.reload()
            notify()
            
        }, (error) => {
            console.log(error.text);
        });
    };  

  return (
    <div id='contact' className='max-w-xl  flex flex-col mt-4 p-5 mx-auto justify-center items-center  text-gray-300 pb-24 '>
        <h1 className='text-2xl font-bold pb-10 '>Let's Talk About Your Project</h1>

        <form className='flex flex-col w-full gap-2' ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col md:flex-row gap-2'>
                <input type="text" placeholder='Name' className='w-full bg-inherit border p-2 rounded' id="name" name="user_name" />
                <input type="email" placeholder='Email' className='w-full bg-inherit border p-2 rounded'  required id="email" name="user_email" />
            </div>
            <div>
                <input type="text" placeholder='Subject' className='w-full bg-inherit border p-2 rounded'  id="subject" name="user_subject"/>
            </div>
            <div>
                <textarea name="" id="" cols="20" rows="3" placeholder='Message' className='w-full bg-inherit border p-2 rounded'></textarea>
            </div>
            <div>
                <button type='submit'  className='px-6 py-2 bg-orange-500 rounded font-semibold text-gray-200' id="msg" name="message">Submit</button>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Contact