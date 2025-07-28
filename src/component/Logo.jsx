import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <Link to={"/"} className='w-80 flex gap-5rem'  >
      <img src={logo} alt='logo' className='h-[3.5rem] w-[4rem] mr-5'/>
      <span className='text-[2rem] font-bold'>Habitly</span>
    </Link>
  );
};

export default Logo;