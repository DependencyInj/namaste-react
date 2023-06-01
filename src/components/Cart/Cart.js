import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
        <div>
            <h1 className="font-bold text-3xl">My cart - {cartItems.length}</h1>
            <div className='flex'>
                {cartItems?.map((item, index) =>
                    <CartItem key={item.id} item={item} />
                )}
            </div>
        </div>
    )
}

export default Cart;