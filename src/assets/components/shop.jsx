import React, { useContext } from 'react';
import Leftside from './ShopPage/leftside';
import Rightside from './ShopPage/rightside';
import { ProdContext } from '../context/ProdContext';

const Shop = () => {
    const [data] = useContext(ProdContext);
    return (
        <div>
        <div className='container'>
            <div className="row">
                <div className="col-md-3">
                    <Leftside />
                </div>
                <div className="col-md-9">
                    <Rightside myshopriht={data} />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Shop;
