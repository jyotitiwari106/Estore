import React from 'react'
import { assets, categories } from '../Assest/assets'
import { useNavigate } from 'react-router-dom';


const Categories = () => {
    
    const naviagte = useNavigate();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Categories</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6 mt-6 pb-10'>
          
        {categories.map((category, index) => (
            <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex-col justify-center items-center'
            style={{backgroundColor: category.bgColor}}
            onClick={()=>{
                naviagte(`/products/${category.path.toLocaleLowerCase()}`);
               window.scrollTo(0, 0);

            }}
            > 
            <img src={category.image} alt="" className='group-hover:scale-110 transition max-w-28' />
             <p className='text-sm font-medium'>{category.text}</p>
             </div>
        
        ))}
       
      </div>
    </div>
  )
}

export default Categories
