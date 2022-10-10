import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleSubjectInfo = ({ subject }) => {
    const { id, logo, name, total } = subject;
    return (
        <section className='border-2 border-black mx-5  mb-4 rounded-2xl'>
            <div className=' bg-black rounded-xl m-4'>
                <img src={logo} alt='Sorry' />
            </div>
            <div className='text-left mt-4 pl-4 mb-3'>
                <h2 className='text-3xl'>{name}</h2>
                <p className='mt-1'>Total Question : {total}</p>
            </div>
            <NavLink to={`../quiz/${id}`}>
                <button className='border-2 w-full rounded-b-2xl bg-[#601c7b] h-12 text-white text-xl hover:text-[27px] duration-200'>Starts Quiz</button>
            </NavLink>
        </section>
    );
};

export default SingleSubjectInfo;