import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(getData(url));
    });

    return data;
}

async function getData(url){
    const response = await fetch(url);
    return await response.json();
}

export default useFetch;