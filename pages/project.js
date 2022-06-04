/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import NavMenu from '../components/NavMenu';
import Portfolio from '../components/portfolio/Portfolio'
import { data } from '../data';

const allCategories = ['All',...new Set(data.map((item)=>
item.category))] 

const project = () => {
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
      <>
        <NavMenu/>
        <div className="bg-gray-900 min-h-screen">
        <Portfolio categories={categories} filterItems= {filterItems}  portfolioData={portfolioData}/>
    </div>
      </>
    
  )
}

export default project