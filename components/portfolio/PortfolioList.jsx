import React,{useState} from 'react'

const PortfolioList = ({categories,filterItems}) => {
    const [selected,setSelected] = useState("All");
  return (
    <div className='mt-4 flex items-center justify-center'>        
        {categories && categories.map((category, index)=>{
        return ( 
        <p className={selected === category ? "bg-orange-500 px-3 py-1  text-base rounded-lg cursor-pointer" : "cursor-pointer px-3 py-1 text-lg rounded-lg"}
        key={index}   onClick={()=>{
            filterItems(category)
            setSelected(category)
        }}>{category}</p>)
        })}   
    </div>
  )
}

export default PortfolioList