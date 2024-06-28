import React from 'react'
import { useCart } from 'react-use-cart';

const AddToCard = () => {
    const { isEmpty, items, removeItem, updateItemQuantity, cartTotal } = useCart();
    return (
        <div>
            {isEmpty ? <div className='d-flex align-items-center justify-content-center'><h1>Cart is Empty</h1></div> : <div className="d-flex align-items-center justify-content-center flex-column">
                <h1 className='mb-5 mt-5'>Basket</h1>
                <div className="col-10">
                    <table class="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, c) => (
                                <tr className='text-center'>
                                    <th scope="row">{c + 1}</th>
                                    <td><img src={item.image} alt="" style={{ width: '120px' }} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td>
                                        <div>
                                            <button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span className='mx-3'>{item.quantity}</span>
                                            <button className='btn btn-dark' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </td>
                                    <td><button className='btn btn-danger' onClick={() => { removeItem(item.id) }}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1>Total: <span>{cartTotal}</span></h1>
                </div>
            </div>}
        </div>
    )
}

export default AddToCard;