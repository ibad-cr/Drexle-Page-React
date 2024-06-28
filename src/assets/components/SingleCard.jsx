import React from 'react'
import { useCart } from 'react-use-cart'
import Swal from 'sweetalert2';

const SingleCard = ({ alldata }) => {
    const { addItem } = useCart();
    return (
        <div className='mb-3'>
            <div className="text-center">
                <div className="card" style={{ border: 'none', borderRadius: '0', background: 'none' }}>
                    <img src={alldata.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{alldata.title}</h6>
                        <div className='star-icon'>
                            <i class="fa-solid fa-star" style={{ fontSize: '12px' }}></i>
                            <i class="fa-solid fa-star" style={{ fontSize: '12px' }}></i>
                            <i class="fa-solid fa-star" style={{ fontSize: '12px' }}></i>
                            <i class="fa-solid fa-star" style={{ fontSize: '12px' }}></i>
                            <i class="fa-solid fa-star" style={{ fontSize: '12px' }}></i>
                        </div>
                    </div>
                        <p>$210 <strong style={{ fontSize: '20px' }}>{alldata.price}</strong></p>
                        <button onClick={() => {
                            addItem(alldata), Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Added",
                                showConfirmButton: false,
                                timer: 600
                            });
                        }} class='add-to-card'>Add to card</button>
                </div>
            </div>

        </div>
    )
}

export default SingleCard;