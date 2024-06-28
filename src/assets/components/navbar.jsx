import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import slugify from 'slugify';
import { BlogContext } from './BlogContext';
import { LangContext } from '../context/Language';
import { ModeContext } from '../context/Mode';

const Navbar = () => {
    const { totalItems } = useCart();
    const [blogdata] = useContext(BlogContext);
    const [keyword, setKeyWord] = useState();
    const [lang, setLang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className={`${mode === "Light" ? "Light" : "Dark"}`}>
            <div className="container" style={{ padding: '0' }}>
                <div className='pt-5'>
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <ul className='d-flex' style={{ gap: '50px', padding: '0' }}>
                                <li className='list-group-item'><Link to="/" style={{ textDecoration: 'none', color: 'black', textTransform: 'uppercase', fontSize: '14px' }}>
                                    {lang === 'AZ' ? 'Əsas Səhifə' : 'Home'}</Link>
                                    <i class="fa-solid fa-angle-down mx-2" style={{ fontSize: '14px', opacity: '0.8' }}></i>
                                </li>
                                <li className='list-group-item'><Link to='/shop' style={{ textDecoration: 'none', color: 'black', textTransform: 'uppercase', fontSize: '14px' }}>
                                    {lang === 'AZ' ? 'Mağaza' : 'Shop'}</Link>
                                    <i class="fa-solid fa-angle-down mx-2" style={{ fontSize: '14px', opacity: '0.8' }}></i>
                                </li>
                                <li className='list-group-item'><Link to='/blog' style={{ textDecoration: 'none', color: 'black', textTransform: 'uppercase', fontSize: '14px' }}>
                                    {lang === 'AZ' ? 'Blog' : 'Blog'}</Link>
                                    <i class="fa-solid fa-angle-down mx-2" style={{ fontSize: '14px', opacity: '0.8' }}></i></li>
                                <li className='list-group-item'>
                                    {lang === 'AZ' ? 'Səhifələr' : 'Pages'}
                                    <i class="fa-solid fa-angle-down mx-2" style={{ fontSize: '14px', opacity: '0.8' }}></i>
                                </li>
                            </ul>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav mx-auto mb-3">
                                    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/logo.png" alt="" className='drexle-image' />
                                </ul>
                                <span class="navbar-text">
                                    <ul className='d-flex align-items-center' style={{ gap: '40px' }}>
                                        <li className='list-group-item' style={{ whiteSpace: 'nowrap' }}>{lang === 'AZ' ? 'Giriş və ya Qeydiyyatdan' : 'Login or Register'}</li>
                                        <li className='list-group-item'><i class="fa-regular fa-heart"></i> (0)</li>
                                        <li className='list-group-item'>
                                            <Link to="/AddToCard"
                                                style={{ textDecoration: 'none', opacity: '0.8' }}>
                                                Card
                                                <span>({totalItems})</span></Link></li>
                                        <li className='list-group-item'>
                                            <div>
                                                <button type="button" style={{ border: 'none' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Search</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                            </div>

                                                            <div className="modal-body d-flex">
                                                                <input className='search-input' onChange={e => setKeyWord(e.target.value)} type="text" style={{ width: '100%', border: 'none', outline: 'nonr' }} placeholder='Search products' />
                                                                <button className='btn btn-dark search-button' style={{ border: '1px solid black', borderRadius: '4px' }}>Search</button>
                                                            </div>
                                                            <div >
                                                                <ul class="list-group">
                                                                    {!keyword ? "" : blogdata.filter(p => p.title.toLocaleLowerCase().includes(keyword)).map(item => (
                                                                        <span data-bs-dismiss="modal">
                                                                            <Link to={`/productdetails/${slugify(item.title)}`} class="list-group-item" id='search-products'>
                                                                                <img src={item.image}
                                                                                    alt="Error" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                                                                {item.title}
                                                                            </Link>
                                                                        </span>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='list-group-item'>
                                            <button style={{ border: 'none', cursor: 'pointer' }} onClick={() => {
                                                lang === 'EN' ? setLang('AZ') : setLang('EN');
                                                lang === 'EN' ? localStorage.setItem('lang', 'AZ') : localStorage.setItem('lang', 'EN');

                                            }}>{lang}</button>
                                        </li>

                                        <li className='list-group-item'>
                                            <button style={{ border: 'none', cursor: 'pointer' }} onClick={() => {
                                                mode === 'Light' ? setMode('Dark') : setMode('Light');
                                                mode === 'Dark' ? localStorage.setItem('mode', 'Light') : localStorage.setItem('mode', 'Dark');
                                            }}>{mode}
                                            </button>
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div >
            </div >
        </div>
    )
}

export default Navbar