
const useFetch = (url) => {
    const result = getData(url);
    return result;
}
async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


export default useFetch;