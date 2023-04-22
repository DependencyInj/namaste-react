import Shimmer from '../Shimmer/Shimmer';
import './ShimmerLoader.css';

const ShimmerCards = (props) => {
    const ref = [...Array(10)].map(()=> Shimmer(props.loading));
    return (
        <>
            {
                [...Array(10)].map((item, index) =>
                    <div key={index} ref={ref[index]}>
                        <div  className='card' >
                            <div data-loading className='res-logo'>''</div>
                            <h3 data-loading>''</h3>
                            <h5 data-loading>''</h5>
                            <h5 data-loading>''</h5>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ShimmerCards;