import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';


const Home = () => {
    const [products, setProducts] = useState([]);
    const f = async () => {
        const res = await fetch('http://localhost:3001/products');
        const json = await res.json();
        setProducts(json)

    }
    useEffect(() => {
        f();
    }, [])

    return (
        <div>
            <div class="container">
                <div class="row  my-4">
                    {products.map((item) => {
                        return <>
                            <div class="col-4 ">

                                <Link to={item.id} style={{ textDecoration: 'none' }}> <Card key={item.id} val={item} /> </Link>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Home
