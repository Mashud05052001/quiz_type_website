import React from 'react';

const SingleQuiz = ({ quiz }) => {
    const { correctAnswer, id, options, question } = quiz;
    return (
        <div className='w-10/12 mx-auto mb-10 border-2 border-black rounded-xl p-2'>
            <div>
                <h1 className='flex'><span>Q.</span> <span className='pl-3'>{question}</span></h1>
            </div>
            <div>

            </div>


        </div>
    );
};

export default SingleQuiz;