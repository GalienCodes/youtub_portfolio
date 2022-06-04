import React from 'react'
import NavMenu from '../components/NavMenu'
import Skills from '../components/Skills'

const skills = () => {
  return (
      <>
        <NavMenu/>
        <div className="bg-gray-900 min-h-screen">
        <Skills/>
    </div>
      </>
    
  )
}

export default skills