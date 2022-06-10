/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { AiOutlineTwitter,AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div  className='max-w-7xl  flex flex-col p-5 pb-0 mx-auto justify-center items-center  text-gray-300'>
        <div className='relative mb-10 pt-10'>
          <img src="https://i.ibb.co/p17bsGC/DSC-3662.jpg" alt="profile" className='w-60 h-34 border-2 border-orange-500 rounded '/>
          <div className='flex items-center justify-center'>
            <Link href="/">
              <FaLinkedinIn className='text-white bg-orange-600 text-5xl p-1 rounded-full absolute -bottom-5  border-orange-500 z-1'/>
            </Link>
            <Link href="/">
              <AiOutlineGithub className='text-white bg-orange-500 text-5xl p-1 rounded-full absolute  -bottom-5  right-6 border-orange-500'/>
            </Link>
            <Link href="/">
              <AiOutlineTwitter className='text-white bg-orange-500 text-5xl p-1 rounded-full absolute -bottom-5  left-6 border-orange-500'/>
            </Link>
          </div>
        </div>
        <div className='text-gray-300 flex flex-col justify-center items-center'>
            <span>Hello, I'm</span>
            <h1 className='text-2xl font-bold pt-2'>Galien Dev</h1>
            <h1 className='text-xl text-gray-300'>Web developer</h1>
        </div>
        <div className='flex mt-6'>
          <a href="./assets/CV galien.pdf" className='bg-gray-200 text-gray-900 hover:text-gray-200 hover:bg-gray-900 p-2  mx-2 border-2 border-gray-200 rounded text-xl'>Download Cv</a>
          <a href="#about" className='p-2 mx-2 border-2 border-gray-200 rounded text-xl bg-gray-200 text-gray-900 hover:text-gray-200 hover:bg-gray-900'>About Me</a>
        </div>

    </div>
  )
}

export default Hero