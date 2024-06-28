import React, { useContext } from 'react';
import BlogSingleCard from './BlogSingleCard';
import { BlogContext } from './BlogContext';
import { ModeContext } from '../context/Mode';

const Blog = () => {
    const [blogdata] = useContext(BlogContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className={`${mode==="Light"?"Light":"Dark"}`}>
        <div className="container">
            <div className='row mb-5'>
                {blogdata.map(item => (
                    <div key={item.id} className="col-12 col-sm-12 col-md-4 mb-5">
                        <BlogSingleCard alldata={item} />
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default Blog;
