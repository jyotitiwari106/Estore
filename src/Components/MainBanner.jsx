import React from 'react'
import { assets } from '../Assest/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Background Images */}
      <img src={assets.main_banner_bg} alt="MainBanner" className="w-full hidden md:block" />
      <img src={assets.main_banner_bg_sm} alt="MainBanner" className="w-full md:hidden" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center md:items-start items-center px-6 md:px-28">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-[450px] leading-snug lg:leading-normal">
          Freshness You Can Trust, Savings You will Love!
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-green-500 hover:bg-green-600 
            transition rounded text-white cursor-pointer justify-center"
          >
            Shop now
            <img
              className="md:hidden transition group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="Arrow"
            />
          </Link>

          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-9 py-3 cursor-pointer justify-center text-gray-700 font-medium"
          >
            Explore deals
            <img
              className="transition group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner

