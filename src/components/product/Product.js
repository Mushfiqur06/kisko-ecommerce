import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './../context/Context'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Product extends Component {
    state = {  }
    render() { 
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="cart">
                    <div className="img-container p-5" onClick={() => console.log('You Click Me on the image container')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="cart-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => console.log('Added to the cart')}>
                            {inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>) : (<FontAwesomeIcon icon={['fas', 'cart-plus']} />) }
                        </button>
                    </div>

                    {/* Cart Footer Start */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                    {/* End of Cart Footer */}

                </div>
            </div>
        );
    }
}
 
export default Product;

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}