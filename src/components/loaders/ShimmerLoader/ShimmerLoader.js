import Shimmer from '../Shimmer/Shimmer';
import './ShimmerLoader.css';

const ShimmerCards = (props) => {
    const ref = [...Array(10)].map(()=> Shimmer(props.loading));
    return (
        <>
            {
                [...Array(10)].map((item, index) =>
                    <div key={index} ref={ref[index]}>
                        <div  className='animate-pulse card' >
                            <div data-loading className='bg-slate-200 res-logo'>''</div>
                            <h3 className='bg-slate-200' >''</h3>
                            <h5 className='bg-slate-200' >''</h5>
                            <h5 className='bg-slate-200' >''</h5>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ShimmerCards;