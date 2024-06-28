import axios from "axios";
import {createContext, useEffect, useState } from "react";

export const ProdContext = createContext();

export const ProdProvider = ({ children }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5500/src/assets/data/product.json')
            .then(res => setData(res.data))
    }, [])

    
    return (
        <ProdContext.Provider value={[data, setData]}>
            {children}
        </ProdContext.Provider>
    )
}