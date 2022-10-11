import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const AllQuiz = () => {
    const questions = useLoaderData();
    const allQues = questions.data.questions;
    return (
        <div className='text-[#601c7b] my-14 w-10/12 mx-auto '>
            <h1 className='text-3xl font-semibold font-[cursive] py-4 mb-4 text-center'>{questions.data.name} All Quiz</h1>
            <div className='grid grid-cols-2 gap-x-8'>
                {
                    allQues.map(item => <SingleQuiz key={item.id} quiz={item} />)
                }
            </div>
        </div>
    );
};

export default AllQuiz;