import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='relative flex flex-col sm:flex-row border border-gray-400 overflow-hidden'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141] text-center sm:text-left px-4'>
          <div className='flex items-center justify-center sm:justify-start gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base text-gray-700'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:text-4xl lg:text-5xl leading-relaxed text-gray-800 font-semibold mt-4'>
            Latest Arrivals
          </h1>
          <div className='flex items-center justify-center sm:justify-start gap-4 mt-6'>
            <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-6 rounded-md hover:scale-105 transform transition duration-300 font-semibold'>
              SHOP NOW
            </button>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2'>
        <img className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' src={assets.hero_img} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
