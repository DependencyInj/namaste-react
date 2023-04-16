import './Card.css'

const RestaurentCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = props.resData?.data;
    return (
        <div className='card'>
            <img className='res-logo' src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} Stars</h5>
        </div>
    );
}

export default RestaurentCard;