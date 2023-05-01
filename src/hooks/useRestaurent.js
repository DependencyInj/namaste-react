import { useEffect, useState } from "react"
import { restaurentMenuUrl } from "../utils/constants";

const useRestaurent = (id) => {
    const [restaurent, setRestaurent] = useState(null);
    
    useEffect(()=> {
        getData();
    }, []);

    async function getData(){
        const dataUrl = restaurentMenuUrl(id);
        const response = await fetch(dataUrl);
        const data = await response.json();
        setRestaurent(data);
    }
    
    return restaurent;
}

export default useRestaurent;