import React, { useState } from 'react' 
import {assets} from '../../assets/assets'
import './Nav.css';
const Navbar = () => {
    const navlist=['Home','Menu','Contact us','About us']
    const [menu,setmenu]=useState('Home');
  return (
    <div className='navbar flex justify-between px-10 py-5 items-center'>
   <img src={assets.logo} alt="" className="w-36 logoimg" />
   <ul className="navmenux flex list-none gap-8 text-lg text-indigo-950">
        {
            navlist.map((val,index)=>
                <li onClick={()=>setmenu(val)} className={menu===val?"active":"cursor-pointer"} key={index}>{val}</li>
            )
        }
   </ul>
   <div className='navr flex items-center gap-10'>
        <img src={assets.search_icon} alt="" />
        <div className="nav_search relative">
            <img src={assets.basket_icon} alt="" />
            <div className="dot absolute min-w-3 min-h-3 bg-red-600 bottom-6 left-6 rounded"></div>
        </div>
        <button className='text-lg but duration-300' >Sign In</button>
   </div>
    </div>
  )
}

export default Navbar
