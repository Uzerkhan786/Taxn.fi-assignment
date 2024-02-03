import { useState } from 'react'

const useFetch = async () => {
    const [products, setProducts] = useState(null);
    const res = await fetch('http://localhost:3000/products');
    const json = await res.json();
    setProducts(json.products);
    return products;
}

export default useFetch
