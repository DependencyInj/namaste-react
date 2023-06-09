import './Header.css'
import logo from '../../../assets/logo3.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const items = useSelector(state => state.cart.items);
    return (
        <div className='header bg-green-50 shadow-xl'>
            <div className='logo-container'>
                <img className='logo' src={logo} />
            </div>
            <div className='nav-items mt-5'>
                <ul>
                    <li className='px-2'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-2'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='px-2'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className='px-2'>
                        <Link to="/cart">
                            Cart({items.length})
                        </Link>
                    </li>
                    <li className='px-2'>
                        <Link to='/instamart'>
                            InstaMart
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;