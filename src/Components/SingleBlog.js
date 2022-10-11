import React, { useState } from 'react';
import './SingleBlog.css'
const SingleBlog = ({ info }) => {
    const [show, setShow] = useState(false);
    const { question, answer, id } = info;
    console.log(show);
    return (
        <div className='relative border-2 border-gray-500 rounded-2xl mt-4'>
            <h2 className='  py-2 pl-4'><span className='pr-1 font-semibold'>Q{id}.</span>{question}
                <span className='absolute right-10 cursor-pointer' onClick={() => setShow(!show)}>
                    {
                        show ? '➖' : '➕'
                    }
                </span>
            </h2>
            <p className={show ? 'openCarousel pl-4 mb-2' : 'closeCarousel pl-4 mb-2'}> <hr className='mr-6 border-2 border-black bg-black opacity-30 rounded-full mb-1' /> <span className='font-semibold'>Answer: </span>{answer}</p>
        </div>
    );
};

export default SingleBlog;