import React, { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [sideBar, setSideBar] = useState(false);
    return (
        <div className='bg-gray-300  h-16'>
            <div className='lg:w-9/12 mx-auto h-full flex justify-between items-center  pl-5 pr-4 lg:px-0'>

                <aside >
                    <NavLink to='/topics' className='flex items-center header-logo'>
                        <img src={logo} alt="" className='w-10 md:w-16' />
                        <p className=''>Meta4 Quiz</p>
                    </NavLink>
                </aside>
                <nav
                    className={sideBar ?
                        'flex flex-col top-[80px] -right-32  h-44 justify-between pb-5 rounded-bl-xl pt-2 duration-500  bg-gray-300 absolute md:block md:static md:bg-gray-300 md:h-auto'
                        :
                        'flex flex-col h-44 justify-between right-0 top-[80px] pb-5 rounded-bl-xl pt-2 duration-500 bg-gray-300  absolute sidebar-active md:block md:static md:bg-gray-300 md:h-auto'
                    }>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/topics'><span className='pl-2 pr-1   text-lg navlink-span' onClick={() => setSideBar(!sideBar)}>Topics</span> </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/statistics'><span className='pl-2 pr-1   text-lg navlink-span' onClick={() => setSideBar(!sideBar)}>Statistics</span> </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/blog'><span className='pl-2 pr-1   text-lg navlink-span' onClick={() => setSideBar(!sideBar)}>Blog</span> </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'mx-3 active-navlink' : 'mx-3 deactive-navlink'} to='/about'><span className='pl-2 pr-1 mr-1   text-lg navlink-span' onClick={() => setSideBar(!sideBar)}>About</span> </NavLink>
                </nav>
                <Bars3BottomRightIcon className="h-8 w-8 text-[#601c7b] absolute top-[20px] right-5 sm:right-8 md:invisible cursor-pointer" onClick={() => setSideBar(!sideBar)} />
            </div>
        </div>
    );
};

export default Header;