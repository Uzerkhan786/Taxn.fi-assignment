
const CartDetails = ({ val }) => {
    const { title, image, amount, rating, id, description } = val;



    const click = async () => {
        const res = await fetch('http://localhost:3001/orders/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        await res.json();
    }

    return (

        <div class="card mb-3" style={{ width: '60rem' }}>
            <div className="row">
                <div className="col-2">
                    <img src={image} alt='img' style={{ width: '10rem' }} />
                </div>
                <div className="col-10">
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description.slice(50)}</p>
                        <p class="card-text">$ {amount}</p>
                        <p class="card-text">{rating}🌟</p>
                        <button type="button" className="btn btn-dark" style={{ width: '7rem' }} onClick={click}>Delete</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartDetails
