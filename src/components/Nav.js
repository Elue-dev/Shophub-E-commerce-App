import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import { BsCart4 } from 'react-icons/bs'
import { MdShoppingBasket } from 'react-icons/md'
import '../App.css'

export const Nav = () => {

    const { state: {cart} } = useContext(StoreContext)

    return (
        <div className='nav'>
            <div className='nav_items wrapper'>
                <Link className='logo' to='/'><MdShoppingBasket className='logo_icon' /> Shop<span>Hub</span></Link>
                    <div className='cart_icon'>
                        <Link to='/cart'>
                            <BsCart4 className='nav_cart_icon' /><span>{cart.length}</span>
                            {/* <i className="fas fa-shopping-cart"></i>< */}
                            {/* <i className="fas fa-luggage-cart"></i> */}
                        </Link>
                    </div>
            </div>
        </div>
    )
}


