import Shimmer from '../Shimmer/Shimmer';
import './ShimmerLoader.css';

const ShimmerCards = (props) => {
    const ref  = Shimmer(props.loading);
    return (
        <div className='card' ref={ref}>
            <div data-loading className='res-logo'>''</div>
            <h3 data-loading>''</h3>
            <h5 data-loading>''</h5>
            <h5 data-loading>''</h5>
        </div>
    );
}

export default ShimmerCards;