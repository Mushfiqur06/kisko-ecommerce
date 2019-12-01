import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import ProductList from './components/productList/ProductList'
import Details from './components/Details/Details'
import Cart from './components/cart/Cart'
import Default from './components/default/Default'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
  );
}

export default App;
