import React, { useState } from 'react';
import SingleAnswerShowing from './SingleAnswerShowing';
import { EyeIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';

const SingleQuiz = ({ quiz, number, result, setResult, gems, setGems }) => {
    const { correctAnswer, id, options, question } = quiz;
    const eyeClickToShowResult = () => {
        if (gems === 0) {
            Swal.fire(`You have no more gems left to see the correct answer`)
        }
        else {

            Swal.fire({
                title: 'Do you want to see the answer? It will reduce your 1 gems',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    if (gems > 0) {
                        Swal.fire(`Correct Answer is : ${correctAnswer}`)
                        const updatedGems = gems - 1;
                        setGems(updatedGems);
                    }
                    else {
                        Swal.fire(`You have no more gems left to see the correct answer`)
                    }
                }
            })
        }
    }
    // console.log(number);
    return (
        <div className=' mb-10 border-2 border-[#601c7b] border-opacity-50 rounded-xl p-2 select-none' >
            <div className='mb-5'>
                <h1 className='flex text-lg '>
                    <span className='text-xl'>Q<span className='pl-0.5'>{number + 1}.</span></span>
                    <span className='pl-3 flex justify-between  w-full'>
                        <span className='w-10/12'>{question}</span>
                        <span>
                            <EyeIcon className='h-6 w-6 text-gray-500 cursor-pointer mr-4 mt-1' onClick={eyeClickToShowResult}
                            />
                        </span>
                    </span>
                </h1>

            </div>
            <div>
                {
                    options.map((option, indx) => <SingleAnswerShowing key={indx} answer={option} correctAnswer={correctAnswer}
                        result={result} setResult={setResult} number={number} />)
                }
            </div>


        </div>
    );
};

export default SingleQuiz;