import { CDN_URL } from '../../utils/constants';
import './Card.css'

const RestaurentCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = props.resData?.data;
    return (
        <div className='card' >
            <img className='res-logo' src={`${CDN_URL}${cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} Stars</h5>
        </div>
    );
}

export default RestaurentCard;