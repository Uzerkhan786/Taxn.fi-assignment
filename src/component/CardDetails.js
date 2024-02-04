import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import { prettyDOM } from '@testing-library/react';

const CardDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const f = async () => {
        const res = await fetch('http://localhost:3001/products/' + params.id);
        const json = await res.json();
        setProduct(json)
    }
    useEffect(() => {
        f();
    }, [])


    const fetch = async () => {

        const response = await fetch('http://localhost:3001/products', {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(product), // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json);
    }

    const click = () => {
        fetch();
    }

    return (<>
        {product === null ? (<Shimmer />) :
            (<><div className="row" style={{ paddingTop: '7rem' }}>
                <div className="col-6 " style={{ margin: 'auto' }}>
                    <img src={product.image} style={{ display: 'flex', width: '18rem', height: '20rem', margin: 'auto' }} />
                </div>
                <div className="col-6" style={{ paddingRight: '10rem' }}>
                    <h3 style={{ marginBottom: '2rem' }}>{product.title}</h3>
                    <p>{product.description}</p>
                    <h1 style={{ marginBottom: '3rem' }}>$- {product.amount}</h1>
                    <div style={{ marginTop: '7rem' }}>
                        <button type="button" className="btn btn-light" style={{ width: '7rem', border: '2px solid black', marginRight: '20rem' }}>Buy Now</button>
                        <button type="button" className="btn btn-dark" style={{ width: '7rem' }} onClick={click}>Add to Cart</button>
                    </div>
                </div>
            </div></>)}

    </>
    )
}

export default CardDetails