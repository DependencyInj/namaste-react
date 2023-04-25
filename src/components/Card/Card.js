import { CDN_URL } from '../../utils/constants';
import {Link}  from 'react-router-dom';
import './Card.css';

const RestaurentCard = (props) => {
    const { name, cuisines, avgRating, cloudinaryImageId, id } = props.resData?.data;
    return (
        <Link to={`/restaurent/${id}`}>
            <div className='card' >
                <img className='res-logo' src={`${CDN_URL}${cloudinaryImageId}`} />
                <h3>{name}</h3>
                <h5>{cuisines.join(', ')}</h5>
                <h5>{avgRating} Stars</h5>
            </div>
        </Link>
    );
}

export default RestaurentCard;