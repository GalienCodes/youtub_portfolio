/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { BiUser,BiBookAlt,BiMessageAltDetail } from 'react-icons/bi';
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import Link from 'next/link';

const NavMenu = () => {
  return (
    //   NAV MENU
    <div className='md:hidden max-w-7xl  flex  items-center justify-center p-5 mx-auto'>
        <ul className='fixed bottom-4 bg-orange-500  flex px-10 py-4 w-80 justify-between items-center rounded-full'>
            <li >
                <a href="/">
                <AiOutlineHome className='text-white text-3xl p-1 rounded-full '/>
                </a>
            </li>
            <li>
                <a href="/about">
                <BiUser className='text-white text-3xl p-1 rounded-full'/>
                </a>
            </li>
            <li>
                <a href="/skills">
                <BiBookAlt className='text-white text-3xl p-1 rounded-full'/>
                </a>
            </li>
            <li>
                <a href="/project">
                <BsBriefcase className='text-white text-3xl p-1 rounded-full'/>
                </a>
            </li>
            <li>
                <a href="/contact">
                <BiMessageAltDetail className='text-white text-3xl p-1 rounded-full'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavMenu