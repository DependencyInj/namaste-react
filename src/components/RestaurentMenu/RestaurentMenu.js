import { useParams } from "react-router-dom";
import './RestaurentMenu.css';
import { CDN_URL } from "../../utils/constants";
import ShimmerMenuItem from "../loaders/ShimmerMenuItem/ShimmerMenuItem";
import useRestaurent from "../../hooks/useRestaurent";
import { useDispatch } from 'react-redux';
import { addItem } from "../../slices/CartSlice";

const RestaurentMenu = () => {
    const params = useParams();
    const restaurent = useRestaurent(params.id);
    const restaurentData = restaurent?.data?.cards[0]?.card?.card?.info;
    const restaurentMenu = restaurent?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div className="menu-container">
            <div className="restaurent-details">
                <h3 className="restaurent-name">{restaurentData?.name}</h3>
                <h4 className="restaurent-rating">{restaurentData?.avgRatingString} Stars</h4>
                <p className="restaurent-cuisines">{restaurentData?.cuisines?.join(', ')}</p>
            </div>
            {
                !restaurentMenu ?
                    <ShimmerMenuItem />
                    :
                    restaurentMenu?.map((item, index) => {
                        const { info } = item.card;
                        console.log(info)
                        return (
                            <div key={info.id} className="menu-item">
                                <img className="item-image" src={CDN_URL + info.imageId}></img>
                                <div className="menu-description">
                                    {
                                        info.ratings?.aggregatedRating?.rating > 4 ?
                                            <div className="best-seller">Best seller</div> : ""
                                    }
                                    <h4 className="item-name">{info.name}</h4>
                                    <h5 className="price">{info.price / 100}</h5>
                                    <p className="item-details">{info.description}</p>
                                </div>
                                <div>
                                    <button onClick={() => addFoodItem(info)} className="bg-slate-400  p-1 rounded-lg">add</button>
                                </div>
                            </div>)
                    })
            }
        </div>
    )
}

export default RestaurentMenu;