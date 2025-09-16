import React from 'react'
import { navLinks } from '../constants'
import {hamburger} from "../assets/icons";
import { useState } from 'react';
const Nav = () => {
  const [active,setActive]=useState("#home");  
  return (
    <header className='flex justify-center py-4 bg-gray-100'>
        <nav className='fixed z-50 bg-gray-50 rounded-full w-[90%] min-w-9xl flex justify-between items-center px-10 py-3 shadow max-container animate-drop'>
            <div>
                <span className='text-markyetcolor font-extrabold'>Market<span className='text-black'>Yet</span></span>
            </div>
            <ul className='bg-gray-100 flex justify-center items-center gap-16 rounded-full px-4 py-2 max-lg:hidden'>
                {navLinks.map((items)=>(
                    <li key={items.label}>
                        <a href={items.href} onClick={()=>setActive(items.href)} className={`${active===items.href ? "navActiveView":""}`}>{items.label}</a>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})} className='rounded-full text-sm border-2 border-markyetcolor px-5 py-2 font-medium focus:bg-markyetcolor focus:text-white max-lg:hidden'>Contact Us</button>
            </div>
            <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
        </nav>
    </header>
    
  )
}

export default Nav