import React, { useContext} from 'react';
import slugify from 'slugify';
import { Link, useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';

const BlogCardDetalis = () => {
    const [blogdata] = useContext(BlogContext);

    const { slug } = useParams();
    const productDetails = blogdata.find(p => slugify(p.title) === slug);

    return (
        <div>
            {productDetails ? (
                <div className="container col-xxl-12 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={productDetails.image} className="d-block mx-lg-auto img-fluid" alt={productDetails.details} width={700} height={500} loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productDetails.title}</h1>
                            <p className="lead">{productDetails.details}</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/blog" className="btn btn-primary btn-lg px-4 me-md-2">Back</Link>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='d-flex align-items-center justify-content-center'>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8a1f1813765711.56277edb36b94.gif"
                        alt="" style={{ width: '100%', height: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default BlogCardDetalis;
