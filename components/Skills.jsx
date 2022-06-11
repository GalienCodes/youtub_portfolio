/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { skillsBackend, skillsFrontend } from '../data'

function Skills() {
  return (
    <div id='skills'>
        <h1 className='text-2xl font-bold pb-4  text-center text-gray-200'>My Skills</h1>
        <div className='max-w-3xl p-5  mx-auto flex flex-col md:flex-row text-gray-200 bg-gray-800  gap-5  rounded-lg mt-4'> 
            <div className='w-full md:w-1/2 bg-gray-900 p-4 flex flex-col items-center justify-center rounded-lg '>
                <h2 className='text-2xl font-semibold pb-4'>Frontend</h2>
            <div className='flex flex-wrap m-1 items-center justify-center'>
            {skillsFrontend.map((item,id)=>(
                        <div key={id} className='w-1/4 flex flex-col items-center justify-center' >
                            <img src={item.url} alt={item.name}  className="h-14 w-14 bg-gray-700 p-2 rounded-full object-contain"/>
                            <p className='text-md font-normal capitalize p-2 text-gray-200'>{item.name}</p>
                        </div>
                ))}
            </div> 
            </div>

            <div className='w-full md:w-1/2 bg-gray-900 p-4 flex flex-col items-center justify-center rounded-lg'>
                <h2 className='text-2xl font-semibold pb-4'>Backend</h2>
            <div className='flex flex-wrap m-1 items-center justify-center'>
            {skillsFrontend.map((item,id)=>(
                        <div key={id} className='w-1/4 flex flex-col items-center justify-center' >
                            <img src={item.url} alt={item.name}  className="h-14 w-14 bg-gray-700 p-2 rounded-full object-contain"/>
                            <p className='text-md font-normal capitalize p-2 text-gray-200'>{item.name}</p>
                        </div>
                ))}
            </div> 
            </div>   
        </div>
    </div>
  )
}

export default Skills