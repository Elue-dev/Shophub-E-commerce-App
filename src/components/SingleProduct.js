import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
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
                            <button className=' btn cart_detail'>View Details</button>
                        </Link>
                        {cart.some(p => p.id === product.id) ? (
                            // <Link to='/cart'><button className='btn view_in_cart'>View in Cart</button></Link>
                            <button disabled onClick={() =>dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: product,
                            })} className='btn add_to_cart disabled'><i className="fas fa-check-double"></i> Added to Cart</button>
                        ) : (
                            <button onClick={() =>dispatch({
                                type: 'ADD_TO_CART',
                                payload: product,
                            })} className='btn add_to_cart'><i className="fas fa-cart-plus"></i> Add To Cart</button>
                        )}
                    </div>

            </div>
    )
}

