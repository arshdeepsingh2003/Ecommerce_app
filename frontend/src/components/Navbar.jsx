import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // To get the current path

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
          <img src={assets.search_icon} className='w-5 cursor-pointer' alt=" "></img>
      

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
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
      </a> 
      <img src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=""></img>
      </div>
    </div>
  );
};

export default Navbar;
