import React from 'react'
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const BlogSingleCard = ({ alldata }) => {
    return (
        <div >
            <div>
                <div className="card" style={{ border: 'none' }} >
                    <img src={alldata.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{alldata.title}</h5>
                        <div className='d-flex' style={{ gap: '50px' }}>
                            <p className="card-text"><i class="fa-solid fa-calendar-days me-2"></i>June 5, 2017</p>
                            <p><i class="fa-regular fa-pen-to-square me-2"></i>Posted By Admin</p>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                        <Link to={`/productdetails/${slugify(alldata.title)}`} style={{ color: 'black' }}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSingleCard;