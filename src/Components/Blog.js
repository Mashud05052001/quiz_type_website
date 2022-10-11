import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBlog from './SingleBlog';
const Blog = () => {
    const data = useLoaderData();
    return (
        <div className='my-12 w-6/12 mx-auto select-none'>
            <h1 className='text-3xl text-center text-[#601c7b] font-bold'>Answering Question</h1>
            <div className='border-2 rounded-xl w-10/12 mx-auto mt-5 p-4'>
                {
                    data.map(item => <SingleBlog key={item.id} info={item} />)
                }
            </div>
        </div>
    );
};

export default Blog;