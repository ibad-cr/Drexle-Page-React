import React, { useContext } from 'react'

const Footer = () => {

    return (
        <div>
            <div class="container">
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-3 mb-3">
                            <h5 style={{color: 'black', textDecoration: 'none', fontSize: '16px'}}>ABOUT</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>News & Stories</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>History</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Our Studio</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Showrooms</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Stockists</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3 mb-3">
                            <h5 style={{color: 'black', textDecoration: 'none', fontSize: '16px'}}>CUSTOMER SERVICES</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Contact us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Trade Services</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Login/Register</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Delivery & Returns</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>F.A.Q.’s</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-3 mb-3">
                            <h5 style={{color: 'black', textDecoration: 'none', fontSize: '16px'}}>FURNITURE</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Table</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Chairs</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Storage</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 mb-3">
                            <h5 style={{color: 'black', textDecoration: 'none', fontSize: '16px'}}>ACCESSORIES</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Candles & Fragrance</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Stationery</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Kitchen & Dining</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Textiles</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>Gifl Sets</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <ul className='d-flex' style={{gap: '30px', padding: '0'}}>
                            <li  className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>ABOUT US</a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>BLOG</a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>F.A.Q.’S</a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>ORDER TRACKING</a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>CONTACT US</a></li>
                        </ul>
                        <ul className='d-flex' style={{gap: '30px'}}>
                            <li  className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}>CONNECT WITH US</a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}><i class="fa-brands fa-twitter"></i></a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}><i class="fa-brands fa-facebook"></i></a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}><i class="fa-brands fa-google-plus-g"></i></a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li className='list-group-item'><a href="#" style={{color: 'black', textDecoration: 'none', fontSize: '14px'}}><i class="fa-solid fa-wifi"></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer