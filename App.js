
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/header/Header';


const RestaurentCard = () => {
    return (
        <div className='card'>
            <img className='res-logo' src='https://b.zmtcdn.com/data/pictures/9/20204179/f940438a7dd0aeb302a5e47925ec1eea_o2_featured_v2.jpg?output-format=webp' />
            <h3>Arabian Restaurant</h3>
            <h5>Biriyani, Mandhi, Chicken Afghani...</h5>
            <h5>4.3 Stars</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
                <RestaurentCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);