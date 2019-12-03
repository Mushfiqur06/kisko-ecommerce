import React, { Component } from 'react';
import Product from './../product/Product'
import Title from './../Title/Title'

class ProductList extends Component {
    state = {
        products: []
    }
    render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="product" />
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductList;