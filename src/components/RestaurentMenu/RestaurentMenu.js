import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurentMenu.css';
import { CDN_URL } from "../../utils/constants";
import ShimmerMenuItem from "../loaders/ShimmerMenuItem/ShimmerMenuItem";

const RestaurentMenu = () => {
    const params = useParams();
    const [restaurentData, setRestaurentData] = useState({});
    const [restaurentMenu, setRestaurentMenu] = useState([]);

    useEffect(() => {
        getMenu();
    }, []);

    async function getMenu() {
        const data = await
            fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0158605&lng=76.3418666&restaurantId=${params.id}&submitAction=ENTER`);
        const menu = await data.json();
        setRestaurentData(menu.data.cards[0].card.card.info);
        setRestaurentMenu(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return (
        <div className="menu-container">
            <div className="restaurent-details">
                <h3 className="restaurent-name">{restaurentData.name}</h3>
                <h4 className="restaurent-rating">{restaurentData.avgRatingString} Stars</h4>
                <p className="restaurent-cuisines">{restaurentData?.cuisines?.join(', ')}</p>
            </div>
            {
                !restaurentMenu.length ?
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
                            </div>)
                    })
            }
        </div>
    )
}

export default RestaurentMenu;