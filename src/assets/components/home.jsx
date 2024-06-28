import React, { useContext } from 'react'
import Carousel from './HomePage/carousel'
import Slider from 'react-slick'
import { BlogContext } from './BlogContext';
import { ModeContext } from '../context/Mode';

const Home = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [blogdata] = useContext(BlogContext)

    return (
        <div>
            <div >
                <Carousel />

                <div className='container'>
                    <div>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {blogdata.map(item => (
                                    <div key={item.id}>
                                        <img src={item.image} alt="" style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div></div>
            </div>
        </div>


    )
}

export default Home