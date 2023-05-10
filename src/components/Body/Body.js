import './Body.css';
import RestaurentCard from '../Card/Card';
import topRatedIcon from '../../../assets/best-seller.png';
import { useState } from 'react';
import ShimmerCards from '../loaders/ShimmerLoader/ShimmerLoader';
import useIsOnline from '../../hooks/useIsOnline';
import useListOfRestaurents from '../../hooks/useListOfRestaurents';

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [listOfres, listOfresFiltered, setListOfResFiltered] = useListOfRestaurents();
    const isOnline = useIsOnline();

    const search = () => {
        setListOfResFiltered(listOfres
            .filter(item => item.data.name
                .toLowerCase()
                .indexOf(searchText.toLowerCase()) > -1));
    }

    const filterTopRated = () => {
        setListOfResFiltered(listOfres.filter(item => item.data.avgRating > 4));
    }
    

    if (!isOnline) {
        return <h1>You are offline</h1>
    }

    return (
        <div className='body bg-green-50'>
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

            <div className='flex flex-wrap' >
                {
                    (listOfres.length && !listOfresFiltered.length) ?
                        (<h1>No item matches this search!!</h1>) :
                        (listOfresFiltered.length ?
                            listOfresFiltered.map(res => <RestaurentCard loading={!listOfres.length} key={res.data.id} resData={res} />) :
                            <ShimmerCards loading={true} />
                        )
                }
            </div>
        </div>
    )
}

export default Body;