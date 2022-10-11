import React, { useState } from 'react';
import './SingleAnswerShowing.css'
// importing toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleAnswerShowing = ({ answer, correctAnswer, total, setTotal }) => {
    const [fill, setFill] = useState(false);
    const [color, setColor] = useState();
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

    const handleToCheck = (ans) => {
        if (ans === correctAnswer) {
            console.log(true);
            correctToasting();
            setTotal(total + 1);
        }
        else {
            wrongToasting();
            setTotal(total - 1);
        }
        setFill(true);
    }
    // console.log(answer);
    return (
        <div className='border-2 mx-3 mb-5 rounded-xl font-medium slick-disabled singleAnswer'
        >
            <label className='flex items-center cursor-pointer select-none  ' >

                <input type="radio" className='mt-1 ml-3 cursor-pointer' name='button' />

                <span className='pl-3  w-full py-3' onClick={() => handleToCheck(answer)}>
                    {answer}
                </span>
            </label>
            <ToastContainer />
        </div>
    );
};

export default SingleAnswerShowing;