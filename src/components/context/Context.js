import React, { Component } from 'react'
import { storeProducts, detailProduct } from './../../data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products : storeProducts,
        detailsProduct: detailProduct
    }
    handleDetail = () => {
        console.log('hello from details')
    }

    addToCart = () => {
        console.log('hello from Cart')
    }
    tester = () => {
        console.log('State product: ' + this.state.products[0].inCart)
        console.log('Data Product: ' + storeProducts[0].inCart)

        const tempProducts = [...this.state.products]
        tempProducts[0].inCart = true;

        this.setState(() => {
            return {
                products: tempProducts
            }, () => {
                console.log('State product: ' + this.state.products[0].inCart)
                console.log('Data Product: ' + storeProducts[0].inCart)
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{
                    products: this.state.products,
                    detailsProduct: this.state.detailsProduct,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}
            >
                <button onClick={this.tester}>Test Me</button>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
