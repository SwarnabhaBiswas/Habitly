import React from "react";
import { NavLink } from "react-router-dom";

import Logo from '../component/Logo'

const Navbar = () => {
  return (
    <div className="w-[80%] ml-20 mr-20 fixed top-5 backdrop-blur-md bg-white/10  rounded-xl shadow-lg p-6 text-white justify-between flex z-10">
    <Logo/>
      <nav className="w-[40%] justify-between flex ">
        <NavLink to={"/dashboard"} className='text-xl pt-2.5 pl-2 pr-2 hover:bg-color6 hover:text-color2 transition-colors duration-300 border border-none rounded-lg'>Dashboard</NavLink>
        
        <NavLink to={"/habits"} className='text-xl pt-2.5 pl-8 pr-8 hover:bg-color6 hover:text-color2 transition-colors duration-300 border border-none rounded-lg'>Habits</NavLink>
        <NavLink to={"/add"} className='text-xl pt-2.5 pl-8 pr-8 hover:bg-color6 hover:text-2 transition-colors duration-300 border border-none rounded-lg'>Add +</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
