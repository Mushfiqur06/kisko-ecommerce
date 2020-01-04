import React, { Component } from 'react'
import { storeProducts, detailProduct } from './../../data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state = {
        products : [],
        detailsProduct: detailProduct
    }
    componentDidMount(){
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    }
    handleDetail = () => {
        console.log('hello from details')
    }

    addToCart = () => {
        console.log('hello from Cart')
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
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
