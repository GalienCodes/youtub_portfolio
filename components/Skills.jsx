/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { skillsBackend, skillsFrontend } from '../data'

function Skills() {
  return (
    <div className='max-w-xl  flex flex-col p-5 pt-0 mx-auto justify-center items-center  text-gray-300'>
        <h1 className='text-2xl font-bold pt-10 pb-12'>My Skills</h1>
        <div className='flex   items-center gap-2 justify-between'>
            <div className='bg-gray-800  flex m-2 p-2 py-0 rounded'>
                {
                    skillsFrontend.map((item)=>{
                        const {id,url,name} = item;
                        return(
                            <div className='w-1/12 m-2 flex flex-row justify-between' key={id}>
                                <img src={url} alt="language" className='w-full h-full object-contain '/>
                            </div>

                        )
                    })
                }

            </div>

        </div>
        
        </div>
  )
}

export default Skills