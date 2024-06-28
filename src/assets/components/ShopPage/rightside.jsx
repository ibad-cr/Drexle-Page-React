import React, { useContext, useEffect, useState } from 'react';
import SingleCard from '../SingleCard';
import { ProdContext } from '../../context/ProdContext';
import { LiaThListSolid } from "react-icons/lia";
import axios from 'axios';
import { LangContext } from '../../context/Language';

const Rightside = () => {
  const [data] = useContext(ProdContext);
  const [category, setCategory] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [lang] = useContext(LangContext);

  useEffect(() => {
    axios.get('http://127.0.0.1:50586/src/assets/data/product.json')
      .then(res => {
        if (res.data && res.data.categories) {
          setCategory(res.data.categories);
        } else {
          console.error("Unexpected data structure", res.data);
        }
      })
      .catch(err => console.error("Error fetching category data: ", err));
  }, []);

  const filterProduct = (cat) => {
    const result = data.filter(p => p.category === cat);
    setFilterData(result);
  };

  return (
    <div>
      <div className="col-12 col-sm-12 col-md-12 mt-5">
        <div id='right-side'>
          <img src="https://demo.lion-themes.net/drexel/wp-content/uploads/2017/06/banner-categori.jpg"
            alt="Banner" className='responsive-image mt-5' />

          <div className='d-flex justify-content-between align-items-center mt-5'>
            <div className='d-flex align-items-center' style={{ gap: '25px' }}>
              <div>
                <h6 className='view-style' style={{ margin: '0' }}>View on</h6>
              </div>
              <div className='d-flex align-items-center'>
                <LiaThListSolid style={{ marginRight: '20px', backgroundColor: '#333333', color: 'yellow', padding: '15px' }} />
                <i className="fa-solid fa-list" style={{ background: 'none', fontSize: '18px' }}></i>
              </div>

              <div className="dropdown mx-5">
                <a className="dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black', textDecoration: 'none', fontSize: '13px', opacity: '0.9' }}>
                  Default sorting <i className="fa-solid fa-angle-down mx-2" style={{ fontSize: '14px', opacity: '0.8', paddingLeft: '70px' }}></i>
                </a>
                {/* <ul className="dropdown-menu">
                  {category.map((item, index) => (
                    <li key={index} className="list-group-item" onClick={() => filterProduct(item.category)}>{item.category}</li>
                  )) }
                </ul> */}
              </div>
            </div>

            <div>
              <p className='show-12-17' style={{ margin: '0' }}>SHOWING 1–12 OF 17 RESULTS</p>
            </div>
          </div>
          <div className='row mt-5'>
            {(filterData.length === 0 ? data : filterData).map(item => (
              <div key={item.id} className="col-md-4">
                <SingleCard alldata={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
