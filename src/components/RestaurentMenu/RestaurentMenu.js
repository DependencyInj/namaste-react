import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './RestaurentMenu.css';
import { CDN_URL } from "../../utils/constants";

const RestaurentMenu = () => {
    const params = useParams();
    const [restaurentData, setRestaurentData] = useState({});
    const [restaurentMenu, setRestaurentMenu] = useState([]);

    console.log(params)

    useEffect(() => {
        getMenu();
    }, []);

    async function getMenu() {
        const data = await
            fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0158605&lng=76.3418666&restaurantId=60008&submitAction=ENTER");
        const menu = await data.json();
        setRestaurentData(menu.data.cards[0].card.card.info);
        setRestaurentMenu(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        console.log(menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return (
        <div className="menu-container">
            <div className="restaurent-details">
                <h3 className="restaurent-name">{restaurentData.name}</h3>
                <h4 className="restaurent-rating">{restaurentData.avgRatingString} Stars</h4>
                <p className="restaurent-cuisines">{restaurentData?.cuisines?.join(', ')}</p>
            </div>
            {
                restaurentMenu?.map(item => {
                    const { info } = item.card;
                    return (
                        <div key={info.id} className="menu-item">
                            <img className="item-image" src={CDN_URL + info.imageId}></img>
                            <div className="menu-description">
                                {
                                    info.ratings?.aggregatedRating?.rating > 4 ?
                                        <div className="best-seller">Best seller</div> : ""
                                }
                                <h4 className="item-name">{info.name}</h4>
                                <h5 className="price">Price</h5>
                                <p className="item-details">250 gm | Serves 1 | Richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices.</p>
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

export default RestaurentMenu;