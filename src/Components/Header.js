import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png'

const Header = () => {
    return (
        <div className='bg-gray-300  h-16'>
            <div className='w-9/12 mx-auto h-full flex justify-between items-center  '>

                <aside >
                    <NavLink to='/topics' className='flex items-center header-logo'>
                        <img src={logo} alt="" className='w-16' />
                        <p className=''>Meta4 Quiz</p>
                    </NavLink>
                </aside>
                <nav >
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/topics'><span className='pl-2 pr-1   text-lg navlink-span'>Topics</span> </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/statistics'><span className='pl-2 pr-1   text-lg navlink-span'>Statistics</span> </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/blog'><span className='pl-2 pr-1   text-lg navlink-span'>Blog</span> </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/about'><span className='pl-2 pr-1 mr-1   text-lg navlink-span'>About</span> </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;