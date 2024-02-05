import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';


const Home = () => {

    const [products, setProducts] = useState([]);
    const getAllProduct = async () => {
        const res = await fetch('http://localhost:3001/products');
        const json = await res.json();
        setProducts(json)

    }
    useEffect(() => {
        getAllProduct();
    }, [])

    return (
        <div>
            {products === null ? (<Shimmer />) : (<div class="container">
                <div class="row  my-4">
                    {products.map((item) => {
                        return <>
                            <div class="col-4 ">
                                <Link to={`products/${item.id}`} style={{ textDecoration: 'none' }}> <ProductCard key={item.id} val={item} /> </Link>
                            </div>
                        </>
                    })}
                </div>
            </div>)}

        </div>

    )
}
export default Home
