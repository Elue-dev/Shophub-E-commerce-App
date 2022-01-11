import React, { useState, useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import '../App.css'

export const Cart = () => {
    const { state: {cart}, dispatch } = useContext(StoreContext)
    const [total, setTotal] = useState()
    useEffect(() => {
        setTotal(cart.reduce((total, current) => total + Number(current.price) * current.qty, 0).toFixed(2))
    }, [cart])

    return (<>
        <Link to='/'>
            <p className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Keep Shopping</p>
        </Link>
        <div className='cart wrapper'>
            {cart.length > 0 ? (
                <div>
                    <h1 className='summary' style={{paddingBottom: '1rem', color: '#333', textAlign:'center'}}>SUMMARY</h1>
                    {cart.map(item => (
                        <div key={item.id}>
                                <div className='cart_items'>
                                    <div className='cart_image_container'>
                                        <img src={item.image} alt={item.title} className='cart_image' />
                                    </div>
                                    <div style={{lineHeight: '2.3'}}>
                                        <p><span>Product Name: </span>{item.title}</p>
                                        <p style={{marginBottom: '.5rem'}}><span>Price:</span> ${item.price}</p>
                                        <b style={{color: '#000'}}>Quantity:</b> 
                                        <select onChange={(e)=>dispatch({
                                            type: 'CHANGE_QTY',
                                             payload: {
                                             id: item.id,
                                             qty: e.target.value
                                            }
                                        })}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </select>
                                        <br/>
                                        <button onClick={() =>dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: item,
                                        })} className='btn cart_btn'><i className="fas fa-trash-alt"></i></button>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <h3 style={{textAlign: 'center'}}> Your Cart is Empty</h3>
                    <Link to='/' className='center_btn'>
                        <button className='btn shop_cart'>Shop Now</button>
                    </Link>
                </>
            )}
        </div>
                <div className='cart_total wrapper'>
                    <span>Total: ${total}</span> ({cart.length === 1 ? ('1 Product') : `${cart.length} Products`})
                </div>

                {cart.length ? (
                    <div className='clear_cart_wrapper'>
                    <h2 onClick={()=>dispatch({
                        type: 'CLEAR_CART',
                    })} className='clear'><i className="fas fa-trash"></i> Clear cart</h2></div>
                ) : null}

                <Link to='/checkout' className='center_btn wrapper'>
                   {cart.length ? <button className='btn checkout_btn'>Proceed to Checkout</button> : ''}
                </Link>
      </>
    )
}