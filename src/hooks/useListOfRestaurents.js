import { useState, useEffect } from "react";
import { SWIGGY_RES_URL } from "../utils/constants";

const useListOfRestaurents = () =>{
    const [listOfRestaurents, setListOfRestaurents] = useState([]); 
    const [listOfresFiltered, setListOfResFiltered] = useState([]);


    useEffect(() => {
        getRestaurents();
    }, []);

    async function getRestaurents() {
        const data = await fetch(SWIGGY_RES_URL);
        const json = await data.json();
        setListOfRestaurents(json?.data?.cards[2]?.data?.data?.cards);
        setListOfResFiltered(json?.data?.cards[2]?.data?.data?.cards);
    }

    return [listOfRestaurents, listOfresFiltered, setListOfResFiltered];
}

export default useListOfRestaurents;