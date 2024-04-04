
import { useState } from 'react'


// import youtube from "../../assets/Images/Instagram.png"

// import b1 from "../../assets/brands/b1.png";
import b2 from "../../assets/brands/b2.png";
import b3 from "../../assets/brands/b3.png";
import b4 from "../../assets/brands/b4.png";
import b5 from "../../assets/brands/b5.png";
import b6 from "../../assets/brands/b6.png";
import b7 from "../../assets/brands/b7.png";
import b8 from "../../assets/brands/b8.png";
import b9 from "../../assets/brands/b9.png";
import b10 from "../../assets/brands/b10.png";
import b11 from "../../assets/brands/b11.png";
import b12 from "../../assets/brands/b12.png";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const Parteners = () => {
    const [imges, setimges] = useState([
        b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12,
    ]);


    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5, // Number of slides visible at a time
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000, // Autoplay speed in milliseconds
    //     pauseOnHover: true, // Pause autoplay on hover

    //     ltr: true,


    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Number of slides visible at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        pauseOnHover: true, // Pause autoplay on hover
        rtl: true,


        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <>
            {/* <div className=' '>

                <Slider {...settings}  >
                    {
                        imges.map((items, index) => {
                            return (
                                <div key={index} className='flex  justify-center items-center p-2  mx-auto   '>
                                    <img
                                        id='brandsimg'
                                        src={items}
                                        alt=""
                                        className=" opacity-90 "
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div> */}

            <div className="flex flex-col gap-[40px] items-center justify-center   w-[100vw] mb-10  ">
                <h1 className=' text-5xl font-bold ' >Our <span className='text-primary-gradient'> Partner </span> </h1>
            </div>



            <div className=' '>
                <Slider {...settings2}  >
                    {
                        imges.map((items, index) => {
                            return (
                                <div key={index} className='flex  justify-center items-center p-2  mx-auto   '>
                                    <img
                                        id='brandsimg'
                                        src={items}
                                        alt=""
                                        className=" opacity-90 "
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>


        </>
    )
}

export default Parteners