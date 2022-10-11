import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';
import { FireIcon } from '@heroicons/react/24/solid'

const AllQuiz = () => {
    const [total, setTotal] = useState(0);
    const questions = useLoaderData();
    const allQues = questions.data.questions;
    const haldOfQuestion = parseInt(allQues.length / 2);
    const [gems, setGems] = useState(haldOfQuestion);
    console.log(gems);

    return (
        <div className='text-[#601c7b] my-14 w-10/12 mx-auto relative'>
            <h1 className='text-3xl font-semibold font-[cursive] py-4 mb-4 text-center'>{questions.data.name} All Quiz</h1>
            <div className='absolute top-7  right-8 text-[#601c7b] flex'>
                <FireIcon className="h-6 w-6 " /> <span className='ml-0.5 text-2xl -mt-1 font-bold font-[cursive]'>{gems}</span>

            </div>
            <div className='grid grid-cols-2 gap-x-8'>
                {
                    allQues.map((item, indx) => <SingleQuiz key={item.id} quiz={item} number={indx} total={total} setTotal={setTotal} gems={gems} setGems={setGems} />)
                }
            </div>
        </div>
    );
};

export default AllQuiz;