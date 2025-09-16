import React from 'react'
import { assets } from '../Assest/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="MainBanner" className='w-full hidden md:block' />
      <img src={assets.main_banner_bg_sm} alt="MainBanner" className='w-full md:hidden' />
      <div className='flex md:justify-center absolute bottom-0 flex-col lg:items-start items-center md:pb-44 pb-24 md:px-28 px-4 '>
        <h1 className='flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold md:text-left max-w-72 md:max-w-80 lg:max-w-[45%] leading-tight lg:leading-normal text-center'>
          Freshness You Can Trust, Savings You will Love
        </h1>

        <div className='flex flex-col md:flex-row items-center font-medium mt-6'>
          <Link 
            to={"/products"} 
            className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-500 hover:bg-green-600 
            transition rounded text-white cursor-pointer justify-center'
          >
            Shop now
            <img className="md:hidden transition group-focus:translate-x-1" src={assets.white_arrow_icon} alt="Arrow" />
          </Link>

          <Link 
            to={"/products"} 
            className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer justify-center mt-4 md:mt-0'
          >
            Explore Deals
            <img className="transition group-focus:translate-x-1" src={assets.black_arrow_icon} alt="Arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
