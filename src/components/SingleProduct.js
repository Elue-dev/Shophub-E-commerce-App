import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { MdAddShoppingCart } from 'react-icons/md'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { IoEyeSharp } from 'react-icons/io5'
import '../App.css'

export const SingleProduct = ({ product }) => {

    const { state: {cart}, dispatch } = useContext(StoreContext)

    return (
        <div className='product'>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price} </p>
                    <div style={{marginTop: '1rem'}}>
                        <Link to={`/products/${product.id}`}>
                            <button className=' btn cart_detail'> <IoEyeSharp className='view_det' /> View Details</button>
                        </Link>
                        {cart.some(p => p.id === product.id) ? (
                            // <Link to='/cart'><button className='btn view_in_cart'>View in Cart</button></Link>
                            <button disabled onClick={() =>dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: product,
                            })} className='btn add_to_cart disabled'><IoCheckmarkDoneSharp className='added_prod' /> Added to Cart</button>
                        ) : (
                            <button onClick={() =>dispatch({
                                type: 'ADD_TO_CART',
                                payload: product,
                            })} className='btn add_to_cart'> <MdAddShoppingCart className='add_prod'/> Add To Cart</button>
                        )}
                    </div>
                    {/* <i className="fas fa-cart-plus"></i> */}
                    {/* <i className="fas fa-check-double"></i> */}
            </div>
    )
}

