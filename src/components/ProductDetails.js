import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Footer } from './Footer'
library.add(faSpinner);

export const ProductDetails = () => {
    const [item, setItem] = useState([])
    const [clicked, setClicked] = useState(true)
    const params = useParams()

    const { state: {cart}, dispatch } = useContext(StoreContext)

    useEffect(() => {
        itemDetail()
    },[])

    const itemDetail = async () => {
        const itemData = await fetch (`https://fakestoreapi.com/products/${params.id}`)
        const response = await itemData.json()
        setItem(response)
    }

    const setClickedd = () => {
        setClicked(!clicked)
    }

    if(item.title === undefined){
        return <FontAwesomeIcon icon='spinner' className='spinner spin_det' size='3x' spin />

    }

    return (
        <>
                <Link to='/'>
                    <p className='wrapper keep_shopping'> <i className="fas fa-arrow-left"></i>Keep Shopping</p>
                </Link>
                <div className='product_detail wrapper' key={item.id}>
                    <div className='product_detail_container'>
                        <img src={item.image} alt={item.name} className='prod_detail_img' />
                        <p><b>Category:</b> {item.category}</p>
                        <p><b>Name:</b> {item.title}</p>
                        <p><b>Description:</b> {item.description}</p>
                        <p><b>Rating:</b> {item.rating.rate}/5 ({item.rating.count} purchasers)</p>
                        <p><b>Price:</b> ${item.price}</p>
                        {cart.some(p => p.id === item.id) ? (
                                <Link to='/cart'><button className='btn view_in_cart'><i className="fas fa-eye"></i>  View in Cart</button></Link>
                        ) : (
                                <button onClick={() =>dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: item
                                })} className='btn add_to_cart det'><i className="fas fa-cart-plus"></i> Add To Cart</button>
                        )}
                    </div>
                </div>
                <Footer />
        </>
    )
}
