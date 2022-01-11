import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import '../App.css'

export const Nav = () => {

    const { state: {cart} } = useContext(StoreContext)

    return (
        <div className='nav'>
            <div className='nav_items wrapper'>
                <Link className='logo' to='/'><i className="fas fa-luggage-cart"></i> Shop<span>Hub</span></Link>
                    <div className='cart_icon'>
                        <Link to='/cart'>
                            <i className="fas fa-shopping-cart"></i><span>{cart.length}</span>
                        </Link>
                    </div>
            </div>
        </div>
    )
}


