import { useEffect, useState } from "react"
import useFetch from "./useFetch";

const useRestaurent = (id) => {
    const [restaurent, setRestaurent] = useState(null);
    
    useEffect(()=> {
        getData();
    }, []);

    async function getData(){
        const dataUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.0158605&lng=76.3418666&restaurantId=${id}&submitAction=ENTER`;
        const response = await fetch(dataUrl);
        const data = await response.json();
        setRestaurent(data);
    }
    
    return restaurent;
}

export default useRestaurent;