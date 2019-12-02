import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import ProductList from './components/productList/ProductList'
import Details from './components/Details/Details'
import Cart from './components/cart/Cart'
import Default from './components/default/Default'

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/details" component={Details} />
        <Route path="cart" component={Cart} />
        <Route path="/default" component={Default} />
        <Route path="/" component={ProductList} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
