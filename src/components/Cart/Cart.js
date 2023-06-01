import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { clearCart } from '../../slices/CartSlice';

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    
    const handleClear = () => {
        dispatch(clearCart())
    }
    
    return (
        <div>
            <h1 className="font-bold text-3xl">My cart - {cartItems.length}</h1>
            <div>
                <button className='bg-green-300' onClick={() => handleClear()}>Clear cart</button>
            </div>
            <div className='flex'>
                {cartItems?.map((item, index) =>
                    <CartItem key={item.id} item={item} />
                )}
            </div>
        </div>
    )
}

export default Cart;