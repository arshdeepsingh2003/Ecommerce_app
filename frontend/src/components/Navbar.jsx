import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible,setVisible] = useState(false);
  const {setShowSearch,getCartCount}=useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <a href="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </a>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {['/', '/collection', '/about', '/contact'].map((path, index) => {
          const labels = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'];
          return (
            <li
              key={index}
              className={`flex flex-col items-center gap-1 group ${
                location.pathname === path ? 'font-bold text-gray-900' : ''
              }`}
            >
              <a href={path}>
                <p className="group-hover:translate-y-[-5px] transition-transform duration-300">
                  {labels[index]}
                </p>
              </a>
              <hr
                className={`w-2/4 h-[1.5px] bg-gray-700 transition-all duration-300 ${
                  location.pathname === path || 'hidden group-hover:block'
                }`}
              />
            </li>
          );
        })}
      </ul>
      <div className='flex items-center gap-6'> 
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt=" "></img>
      

      <div className=' group relative'>
      <img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" />
      <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
      <div className="flex flex-col gap-3 w-40 py-4 px-5 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-600 rounded-lg shadow-lg border border-gray-300">
      <p className="cursor-pointer hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 rounded-md px-2 py-1">
        My Profile
      </p>
      <p className="cursor-pointer hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 rounded-md px-2 py-1">
        Orders
      </p>
      <p className="cursor-pointer hover:text-red-500 hover:bg-gray-100 transition-colors duration-200 rounded-md px-2 py-1">
        Logout
      </p>
                    </div>
                </div>
      </div>
      <a href='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
      </a> 
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
      </div>
      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
       </div>



    </div>
  );
};

export default Navbar;
