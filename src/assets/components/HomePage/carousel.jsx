import React, { useContext } from 'react'
import { ModeContext } from '../../context/Mode';

const Carousel = () => {
    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner container">
                        <div className="carousel-item active">
                            <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1.jpg" className="d-block w-100" alt="..." />
                            {/* <div className='card-img-overlay' style={{ padding: '250px' }}>
                                <h1>DREXEL FURNITIURE</h1>
                                <p style={{ color: '#a3a3a3' }}>Lorem inpus i simple dummy text of the printing and typesetting industry.</p>
                                <a href="#" style={{ color: 'black', fontSize: '14px' }}>VIEW NOW</a>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/slider-home1-2.jpg" className="d-block w-100" alt="..." />
                            {/* <div className='card-img-overlay' style={{ padding: '250px' }}>
                                <h1>DREXEL FURNITIURE</h1>
                                <p style={{ color: '#a3a3a3' }}>Lorem inpus i simple dummy text of the printing and typesetting industry.</p>
                                <a href="#" style={{ color: 'black', fontSize: '14px' }}>VIEW NOW</a>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <button className="carousel-control-prev mx-2" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next mx-2" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel