import React from 'react'

const Card = ({ val }) => {
    const { title, image, amount, rating, id } = val;







    return (
        <div>
            <div class="card" style={{ width: "18rem", margin: '1rem' }}>
                <img src={image} style={{ width: '18rem', height: '12rem' }} alt="" />
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary"> ${amount}</h6>
                    <div className="rating text-center"
                        style={{ height: '2rem', width: '3rem', color: 'white', backgroundColor: 'green', borderRadius: '5px' }}
                    >{rating}</div>
                    <div className="row " style={{ marginTop: '2rem' }}>
                        <div className="col-6">
                            🤍
                        </div>
                        <div className="col-6 " >
                            <span >🛒</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card
