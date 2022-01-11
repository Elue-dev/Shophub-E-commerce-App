import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'


export const Payment = () => {
    let navigate = useNavigate()

    const { state: {cart} } = useContext(StoreContext)

    return (
        <>
            {cart.length === 0 ? (
                <>
                     <p onClick={()=> navigate(-1)} className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Go back</p>
                    <div className='payment_page'>
                        <h1>Add items to your cart to proceed further</h1>
                    </div>
                </>
            ) : (
                <>
                    <p style={{textAlign: 'center'}}>You just paid for:</p>
                    {cart.map(product => (
                        <div className='payment wrapper' key={product.id}>
                            <li>{product.title} <span style={{fontWeight: '700'}}>(${product.price})</span></li>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}