import '../../RestaurentMenu/RestaurentMenu.css';
import Shimmer from '../Shimmer/Shimmer';

const ShimmerMenuItem = () => {

    const refs = [...Array(10)].map(item => Shimmer(true));

    return (
        <>
            {
                [...Array(10)].map((item, index) => {
                    return (<div ref={refs[index]} key={index} className="menu-item-shimmer">
                        <div data-loading className="item-image" ></div>
                        <div className="content-box">
                                <div data-loading className="best-seller">''</div>
                                <div data-loading className="item-name">''</div>
                                <div data-loading className="price">''</div>
                                <p data-loading className="item-details">''</p>
                        </div>
                    </div>)
                })
            }
        </>
    )
}

export default ShimmerMenuItem;