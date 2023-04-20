import './Body.css';
import RestaurentCard from '../Card/Card';
import topRatedIcon from '../../../assets/best-seller.png';
import { useEffect, useState } from 'react';
import ShimmerCards from '../loaders/ShimmerLoader/ShimmerLoader';

const Body = () => {
    const [listOfres, setListOfRes] = useState([]);
    const [listOfresFiltered, setListOfResFiltered] = useState([]);
    const [searchText, setSearchText] = useState("");

    const search = () => {
        setListOfResFiltered(listOfres
            .filter(item => item.data.name
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1));
    }

    const filterTopRated = () => {
        setListOfResFiltered(listOfres.filter(item => item.data.avgRating > 4));
    }

    useEffect(() => {
        getRestaurents();
    }, []);

    async function getRestaurents(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0158605&lng=76.3418666&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRes(json.data.cards[2].data.data.cards);
        setListOfResFiltered(json.data.cards[2].data.data.cards);
    }
    return (
        <div className='body'>
            <div>
                <button onClick={filterTopRated} className='top-rate-btn'>
                    <img className='top-rated-icon' src={topRatedIcon} />
                    Top rated
                </button>
                <div className='search-container'>
                    <input onChange={(event) => setSearchText(event.target.value)} value={searchText} className='search-text' />
                    <button onClick={() => search()} className='search-button'>Search</button>
                </div>
            </div>
            <div className='res-container' >
                {
                   listOfresFiltered.length? listOfresFiltered.map(res => <RestaurentCard loading = {!listOfres.length} key={res.data.id} resData={res} />) : 
                   [...Array(10)].map((item, index) => <ShimmerCards loading = {true} key={index}  />)
                }
            </div>
        </div>
    )
}

export default Body;