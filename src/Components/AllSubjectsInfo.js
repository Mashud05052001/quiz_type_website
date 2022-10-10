import React from 'react';
import Slider from "react-slick";

const AllSubjectsInfo = ({ subjects }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 300000,
        pauseOnHover: true
    };
    return (
        <div>
            <h2>Pause On Hover</h2>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>

            </Slider>
        </div>
    );
};

export default AllSubjectsInfo;