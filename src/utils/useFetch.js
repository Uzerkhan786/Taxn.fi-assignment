import { useEffect, useState } from 'react'

const useFetch = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch();
    }, [])
    const fetch = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const json = await res.json();
        setProducts(json)
    }
    console.log(products);
    return products;
}


export default useFetch
