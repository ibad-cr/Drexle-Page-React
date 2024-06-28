import axios from "axios";
import {createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

    const [blogdata, setBlog] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:59796/src/assets/data/blog.json')
            .then(res => setBlog(res.data))
    }, [])
    
    return (
        <BlogContext.Provider value={[blogdata, setBlog]}>
            {children}
        </BlogContext.Provider>
    )
}