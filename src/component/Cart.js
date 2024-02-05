import React, { useEffect, useState } from 'react'
import CartDetails from './CartDetails';
const Cart = () => {
    const [cart, setCart] = useState(null);
    const allOrder = async () => {
        const res = await fetch('http://localhost:3001/orders');
        const json = await res.json();
        setCart(json)

    }
    useEffect(() => {
        allOrder();
    }, [])

    return (


        <div className="row my-4 m-auto">
            {cart?.map((item) => {
                return <><div className="col-12">
                    <CartDetails val={item} />
                </div></>
            })}
        </div>



    )
}

export default Cart
