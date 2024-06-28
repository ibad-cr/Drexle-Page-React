import React, { useContext } from 'react'
import { LangContext } from '../../context/Language';
import { ModeContext } from '../../context/Mode';

const Leftside = () => {
    const [lang, setLang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className={`${mode==="Light"?"Light":"Dark"}`}>
            <div className="col-12 col-sm-12 col-md-12 mt-5">
                <div id='left-side-width'>
                    <div className='one-section'>
                        <ul>
                            <li className='list-group-item'><a href="#">{lang === 'AZ' ? 'Əsas Səhifə' : 'Home'}</a></li>
                            <li className='list-group-item'><a href="#">/</a></li>
                            <li className='list-group-item'><a href="#">{lang === 'AZ' ? 'Mağaza' : 'Shop'}</a></li>
                            <li className='list-group-item'><a href="#">/</a></li>
                            <li className='list-group-item'><a href="#">{lang === 'AZ' ? 'Aksesuarlar' : 'Accessories'}</a></li>
                        </ul>
                    </div>

                    <div id='left-side-elements'>
                        <div className=''>
                            <h5 className='title-product'>{lang === 'AZ' ? 'MƏHSUL KATEQORİYALARI' : 'PRODUCT CATEGORIES'}</h5>
                        </div>

                        <div className='d-flex justify-content-between list-elemets'>
                            <div className='one-list'>
                                <ul>
                                    <li className='list-group-item mb-4 mt-4'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Aksesuarlar (17)' : 'Accessories (17)'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Qollu kreslo' : 'Arm Chair'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Böyük YADDAŞ' : 'Big STORAGE'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Saat' : 'Clock'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Lampa' : 'Lamp'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Yalnızlar' : 'Singles'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Divan' : 'Sofa'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-3'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Su' : 'Watter'}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='two-list'>
                                <ul>
                                    <li className='list-group-item mb-4 mt-4'><strong>-</strong></li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(0)</li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(3)</li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(1)</li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(0)</li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(5)</li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(1)</li>
                                    <li className='list-group-item mb-3 one-list-elements-font-size'>(3)</li>
                                </ul>
                            </div>
                        </div>


                        <div className='d-flex justify-content-between list-elemets-secondary mt-5'>
                            <div className='one-list'>
                                <ul>
                                    <li className='list-group-item mb-4'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Black Lamp (7)' : 'Black Lamp (7)'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-4'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Dandy Fırçası (3)' : 'Dandy Brush (3)'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-4'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Mebel (4)' : 'Funiture (4)'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-4'>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'İşıq (7)' : 'Light (7)'}
                                        </a>
                                    </li>
                                    <li className='list-group-item mb-4 '>
                                        <a href="#" className='one-list-elements-font-size'>
                                            {lang === 'AZ' ? 'Kateqoriyasız (0)' : 'Uncategorized (0)'}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div id='filter-part mt-5'>
                            <div className='mt-5'>
                                <h5 className='title-product'>{lang === 'AZ' ? 'QİYMƏTƏ GÖRƏ FİLTİR' : 'FILTER BY PRICE'}</h5>
                            </div>
                            <div>
                                <div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min={0} max={10000} defaultValue={0} step={100} style={{ width: '100%' }} />
                                    </div>
                                </div>


                                <div className='d-flex justify-content-between mt-3'>
                                    <div>
                                        <a>{lang === 'AZ' ? 'Qiymət: $0 — $420' : 'Price: $0 — $420'}</a>
                                    </div>
                                    <div className='filter-button'>
                                        <button style={{ border: 'none' }}>Filter</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div id='by-size'>
                            <div className='mt-5'>
                                <h5 className='title-product'>FILTER BY SIZE</h5>
                            </div>
                            <ul style={{ padding: '0' }}>
                                <li className='list-group-item mb-2 mt-4'><a href="#" className='one-list-elements-font-size'>L (3)</a></li>
                                <li className='list-group-item mb-2'><a href="#" className='one-list-elements-font-size'>M (3)</a></li>
                                <li className='list-group-item mb-2'><a href="#" className='one-list-elements-font-size'>S (3)</a></li>
                                <li className='list-group-item mb-2'><a href="#" className='one-list-elements-font-size'>XL (3)</a></li>
                            </ul>
                        </div>

                        <div id='by-color'>
                            <div className='mt-5'>
                                <h5 className='title-product'>{lang === 'AZ' ? 'RƏNGƏ GÖRƏ FİLTİR' : 'FILTER BY COLOR'}</h5>
                            </div>
                            <ul style={{ padding: '0' }}>
                                <li className='list-group-item mb-2 mt-4'><a href="#" className='one-list-elements-font-size'>{lang === 'AZ' ? 'Mavi(3)' : 'Blue(3)'}</a></li>
                                <li className='list-group-item mb-2'><a href="#" className='one-list-elements-font-size'>{lang === 'AZ' ? 'Yaşıl(3)' : 'Green(3)'}</a></li>
                                <li className='list-group-item mb-2'><a href="#" className='one-list-elements-font-size'>{lang === 'AZ' ? 'Ağ(3)' : 'White(3)'}</a></li>
                            </ul>
                        </div>

                        <div id='product'>
                            <div className='mt-5'>
                                <h5 className='title-product'>{lang === 'AZ' ? 'MƏHSULLAR' : 'PRODUCTS'}</h5>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='me-3'>
                                    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/07-2-370x459.jpg" width="90" height="112" alt="" />
                                </div>

                                <div>
                                    <h5 style={{ fontSize: '15px', margin: '0' }}>WATER REPELLENT PARKA</h5>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <p className='mt-1' style={{ padding: '0', fontWeight: '600', fontSize: '13px' }}>$3.00 – $232.00</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center mt-4'>
                                <div className='me-3'>
                                    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/08-370x459.jpg" width="90" height="112" alt="" />
                                </div>

                                <div>
                                    <h5 style={{ fontSize: '15px', margin: '0' }}>WATER REPELLENT PARKA</h5>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <p className='mt-1' style={{ padding: '0', fontWeight: '600', fontSize: '13px' }}>$3.00 – $232.00</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center mt-4'>
                                <div className='me-3'>
                                    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/06-370x459.jpg" width="90" height="112" alt="" />
                                </div>

                                <div>
                                    <h5 style={{ fontSize: '15px', margin: '0' }}>WATER REPELLENT PARKA</h5>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <i class="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                                    <p className='mt-1' style={{ padding: '0', fontWeight: '600', fontSize: '13px' }}>$3.00 – $232.00</p>
                                </div>
                            </div>
                        </div>

                        <div id='tags'>
                            <div className='mt-5'>
                                <h5 className='title-product'>PRODUCT TAGS</h5>
                            </div>
                            <div className='mt-4'>
                                <div>
                                    <button>Acessories</button>
                                    <button className='mx-2'>Blog</button>
                                    <button>Ecommerce</button>
                                </div>

                                <div className='mt-3'>
                                    <button>Fashion</button>
                                    <button className='mx-2'>Hot</button>
                                    <button className='me-2'>Men</button>
                                    <button>Popular</button>
                                </div>

                                <div className='mt-3'>
                                    <button className='me-2'>Women</button>
                                    <button>Woo</button>
                                </div>
                            </div>
                        </div>

                        <div id='compare'>
                            <div className='mt-5'>
                                <h5 className='title-product'>Compare</h5>
                            </div>

                            <div>
                                <div className='mt-3'>
                                    <p>No products to compare</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <p>Clear all</p>
                                    <button >Compare</button>
                                </div>
                                <div>
                                    <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/banner-blog-310x340.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftside