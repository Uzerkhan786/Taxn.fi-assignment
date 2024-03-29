import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (

        <div  >
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: 'rgb(34 42 18)', color: 'whitesmoke' }} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/' style={{ color: 'white' }}>
                        <h1>Shopify</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>

                        <ul className="navbar-nav " style={{ textDecoration: 'none' }}>
                            <li className="nav-item active mx-2">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
                                    <h5>Products</h5>
                                </Link>
                            </li>
                            <li className="nav-item active mx-2">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/login">
                                    <h5>Login</h5>
                                </Link>
                            </li>
                            <li className="nav-item active mx-2">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/cart">
                                    <h5>🛒</h5>
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar

