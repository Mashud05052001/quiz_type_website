import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
// importing toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleAnswerShowing = ({ answer, correctAnswer }) => {
    const [fill, setFill] = useState(false);
    const handleToCheck = () => {
        if (answer === correctAnswer) console.log(true);
        else console.log(false);
        setFill(!fill);
    }
    // console.log(answer);
    return (
        <div>
            <label className='flex items-center cursor-pointer select-none' onClick={() => handleToCheck(answer)}>
                <p className={fill ? 'border-2 w-3 h-3 rounded-full border-[#601c7b] bg-[#601c7b]  p-1' : 'border-2 w-3 h-3 rounded-full border-[#601c7b]  p-1'}>

                </p>
                <span className='pl-3'>
                    {answer}
                </span>
            </label>
        </div>
    );
};

export default SingleAnswerShowing;