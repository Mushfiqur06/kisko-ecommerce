import React, { Component } from 'react';
import {ProductConsumer} from './../context/Context'
import Product from './../product/Product'
import Title from './../Title/Title'
import { storeProducts } from './../../data'

export default class ProductList extends Component {
    state = {
        products: storeProducts
    }
    render() { 
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="product" />

                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}