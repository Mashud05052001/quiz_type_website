import React, { useRef } from 'react';
import Slider from "react-slick";
import SingleSubjectInfo from './SingleSubjectInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const AllSubjectsInfo = ({ subjects }) => {
    const slideRef = useRef(null);
    console.log(slideRef.current);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300000,
        pauseOnHover: true,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },

        ]
    };
    return (
        <div className=' relative'>

            <div className="absolute left-[-68px] top-56 cursor-pointer text-3xl border-2 px-4 rounded-full hover:-translate-x-2  duration-300" onClick={() => slideRef.current.slickPrev()}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="absolute right-[-68px] top-56 cursor-pointer text-3xl border-2 px-4 rounded-full hover:translate-x-2  duration-300" onClick={() => slideRef.current.slickNext()}>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>

            <div>
                <h2 className='text-4xl font-bold mb-12 '>Select Your Quiz Topic</h2>
                <Slider {...settings} ref={slideRef}>
                    {
                        subjects.map(subject => <SingleSubjectInfo key={subject.id} subject={subject}></SingleSubjectInfo>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default AllSubjectsInfo;