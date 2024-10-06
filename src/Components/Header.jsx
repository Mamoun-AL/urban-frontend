import React, { useState,useEffect } from 'react';
import UrbanLogo from './UrbanLogo';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import IconButton from './IconButton'
import Login from './Login';
import Example from './Example.jsx';
import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Header = () => {
  const [isRotated,setIsrotated] = useState(false)
  const handleRotate = () =>{
    setIsrotated(!isRotated);
  }

  const {user,setUser} = useContext(UserContext);
  const navigate = useNavigate();

  
 const [isOpen, setIsOpen] = useState(false);
 const togglePopup = () => {
  setIsOpen(!isOpen);

  const body = document.querySelector('body');
  if (body) {
    body.classList.toggle('overflow-hidden');
   }
  };
  const handleLogout = async () => {
    try {
      await axios.post('/users/logout', {}, { withCredentials: true });
      setUser(null); // Clear user context
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };



    return (
      
  <div className="flex justify-between mb-7 items-center">

            <UrbanLogo/>
<div className='flex text-base items-center gap-x-16'>
<ul className='upperli flex gap-x-6 '>
      <li><Link to='/listing?rent_sale=sale' >buy</Link></li>
      <li><Link to='/listing?rent_sale=rent' >rent</Link></li>
      <li><Link to='/' >find my agent</Link></li>
      <li><Link to='/new-ad' >list your property</Link></li>
 
     </ul>

      <div className='flex  items-center'>
    < IconButton 
    text="favourite properties" 
    icon={(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" /></svg>)}
    className="text-green hover:opacity-75"
    />
    { user ? (
           <div className='flex flex-col  text-center'>

      <Menu as="div" className="relative z-10  ">
      <div onClick={handleRotate} className='  hover:opacity-75 '>
      <p className='capitalize text-sm me-2  -mb-1 font-light  '>hala {user.name}!</p>

        <MenuButton className={`  inline-flex w-full  text-bold border-indigo-600 text-black  justify-center gap-x-1.5 px-2 py-1 text-md capitalize bg-grayf8 font-medium   `}>
        my account
        <ChevronDownIcon aria-hidden="true" className={`h-5 w-5 transition-transform duration-200 ${isRotated ? 'rotate-180' : ''} text-gray-400`} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2  text-black  rounded-md bg-grayf8 border border-green  transition  data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1 flex  text-black flex-col">
          {
           <MenuItem >
            <Link  to='/profile' className="px-8 py-1 text-sm text-black font-medium text-left  border-green capitalize hover:bg-[#e8e8e8] cursor-pointer " >
              profile
            </Link >
          </MenuItem>
          }
        </div>
        <div className="py-1 flex  text-black flex-col">
          {
           <MenuItem >
            <Link to="/myads" className="px-8 py-1 text-sm text-black font-medium text-left  border-green capitalize hover:bg-[#e8e8e8] cursor-pointer " >
              my ads
            </Link>
          </MenuItem>
          }
        </div>
        <div className="py-1 flex  text-black flex-col">
          {
           <MenuItem >
            <button onClick={handleLogout} className="px-8 py-1 text-sm text-black font-medium text-left  border-green capitalize hover:bg-[#e8e8e8] cursor-pointer " >
              logout
            </button>
          </MenuItem>
          }
        </div>
      </MenuItems>
    </Menu>
            </div>
      
    ):(
      < IconButton 
      text="login/signup" 
      onClick={togglePopup}
      icon={(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /> </svg>)}
      className="text-green hover:opacity-75  rounded-full border-2"
      />

    )
      
    }


      </div>

      

</div>
   
{isOpen && (

<Login togglePopup={togglePopup}  />
  )}


  </div>
    )
}
export default Header;



