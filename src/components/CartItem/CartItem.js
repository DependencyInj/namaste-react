import {CDN_URL} from '../../utils/constants'
const CartItem = (props) => {
    const { name, price, imageId, id } = props.item;
    console.log("cart item", props.item)
    return (
        <div className="m-3 p-2 h-80 rounded-md bg-slate-100 hover:drop-shadow-xl w-48">
            <img className='h-32 w-48' src={`${CDN_URL}${imageId}`} />
            <p>{name}</p>
            <p>Price: {price/100}</p>
        </div>
    )
}

export default CartItem;