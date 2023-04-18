import './Body.css';
import RestaurentCard from '../Card/Card';
import resList from '../../utils/restaurantListData';
import topRatedIcon from '../../../assets/best-seller.png';
import { useState } from 'react';

const Body = () => {
    const [listOfres, setListOfRes] = useState(resList);
    const [searchText, setSearchText] = useState("");

    const search = () => {
        setListOfRes(listOfres
            .filter(item => item.data.name
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1));
    }

    const filterTopRated = () => {
        setListOfRes(listOfres.filter(item => item.data.avgRating > 4));
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
            <div className='res-container'>
                {
                    listOfres.map(res => <RestaurentCard key={res.data.id} resData={res} />)
                }
            </div>
        </div>
    )
}

export default Body;