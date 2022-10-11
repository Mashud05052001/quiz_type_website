import React from 'react';
import { useLoaderData } from 'react-router-dom';
import singleBlogItem from './singleBlogItem'
const Blog = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='my-12 w-9/12 mx-auto'>
            <h1 className='text-3xl text-center text-[#601c7b] font-bold'>Answering Question</h1>
            <div>
                {
                    data.map(item => <singleBlogItem />)
                }
            </div>
        </div>
    );
};

export default Blog;