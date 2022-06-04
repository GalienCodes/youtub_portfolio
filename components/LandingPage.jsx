import React,{useState} from 'react'
import About from './About'
import Hero from './Hero'
import NavMenu from './NavMenu'
import { data } from '../data'
import Portfolio from './portfolio/Portfolio'
import Skills from './Skills'
import Contact from './Contact'

const allCategories = ['All',...new Set(data.map((item)=>
item.category))] 

const LandingPage = () => {
    const [portfolioData, setPortfolioData]= useState(data);
    const [categories, setCategories] = useState(allCategories);

  
     const filterItems = (category)=>{
      if(category ==='All'){
        setPortfolioData(data);
        return;
      }
     const  newItems = data.filter((item)=> item.category === category);
      setPortfolioData(newItems);
    }
  return (
    <div className='bg-gray-900'>
        <NavMenu/>
        <Hero/>
        <About/>
        <Portfolio categories={categories} filterItems={filterItems} portfolioData={portfolioData}/>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default LandingPage