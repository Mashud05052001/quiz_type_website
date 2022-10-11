import React from 'react';
import SingleAnswerShowing from './SingleAnswerShowing';

const SingleQuiz = ({ quiz }) => {
    const { correctAnswer, id, options, question } = quiz;
    return (
        <div className=' mb-10 border-2 border-black rounded-xl p-2'>
            <div className='mb-5'>
                <h1 className='flex text-lg'><span>Q.</span> <span className='pl-3'>{question}</span></h1>
            </div>
            <div>
                {
                    options.map((option, indx) => <SingleAnswerShowing key={indx} answer={option} correctAnswer={correctAnswer} />)
                }
            </div>


        </div>
    );
};

export default SingleQuiz;