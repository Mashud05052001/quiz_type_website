import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './Header';
import Lottie from "lottie-react";
import cryingLottie from '../Images/Lottie/crying.json'
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header />
            <div className=' mt-12 w-8/12 mx-auto text-center py-6 rounded-3xl shadow-lg border-[1px] border-t-0 border-l-0'>
                {
                    error &&
                    <div className='   flex flex-col items-center'>
                        <div className='w-44 '>
                            <Lottie animationData={cryingLottie} loop={true} />
                        </div>
                        <h1 className='text-4xl font-semibold text-red-600 mt-4'>{error.statusText || error.message}</h1>
                        <h2 className='text-3xl font-bold mt-1'>{error.status}</h2>
                    </div>
                }
            </div>

        </div>
    );
};

export default ErrorPage;