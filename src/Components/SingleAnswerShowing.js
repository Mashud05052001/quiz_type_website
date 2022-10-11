import React, { useState } from 'react';
import './SingleAnswerShowing.css'
// importing toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleAnswerShowing = ({ number, answer, correctAnswer, result, setResult }) => {


    const correctToasting = () => {
        toast.success('Correct Answer!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
        });
    }
    const wrongToasting = () => {
        toast.error('Wrong Answer!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
        });
    }

    const handleToCheck = (ans, num, corr) => {
        if (ans === correctAnswer) {
            correctToasting();
        }
        else {
            wrongToasting();
        }
        let obj = { "id": num, "providedAnswer": ans, "correctAnswer": corr };
        const isPreviousAvailable = result.find(item => item.id === num);
        if (isPreviousAvailable) {
            const otherObj = result.filter(item => item.id !== num);
            setResult([...otherObj, obj])
        }
        else {
            setResult([...result, obj]);
        }


    }
    // console.log(answer);
    return (
        <div className={({ isActive }) => isActive ? 'bg-red-200' : undefined}>
            <div className='border-2 mx-1 lg:mx-3 mb-1 md:mb-3 rounded-xl font-medium slick-disabled singleAnswer ' >
                <label className='flex items-start  cursor-pointer select-none ' >

                    <input type="radio" className='mt-5 ml-3 cursor-pointer' name={number} />

                    <span className='pl-3  w-full py-3' onClick={() => handleToCheck(answer, number, correctAnswer)}>
                        {answer}
                    </span>
                </label>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SingleAnswerShowing;