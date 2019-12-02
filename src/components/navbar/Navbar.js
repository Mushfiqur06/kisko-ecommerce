import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbarWrapper navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/" className="logo-top">
                    <h1>Kisko</h1>
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto myCartBtn">
                    <button><FontAwesomeIcon icon={['fas', 'cart-plus']} />
                        My Carts
                    </button>
                </Link>
            </nav>
        );
    }
}
 
export default Navbar;