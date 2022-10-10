import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSubjectsInfo from './AllSubjectsInfo';
import './Topics.css'
const Topics = () => {
    const allSubjects = useLoaderData();
    const subjects = allSubjects.data;
    return (
        <div>
            <div className=' topic-bg-img-part h-[70vh]  w-full  mx-auto '>
                <div className='pt-72 text-center'>
                    <h1 className='text-5xl font-semibold font-[cursive]'>Meta4 Quiz Side</h1>
                    <div className='mt-4 text-xl '>
                        <p>This is a Begineer friendly QUIZ webside</p>
                        <p>Here you can easily perticipate and can learn a lot of things</p>
                    </div>
                </div>
            </div>
            <div className=' my-32 w-9/12 mx-auto '>
                <AllSubjectsInfo subjects={subjects} />
            </div>
        </div>
    );
};

export default Topics;