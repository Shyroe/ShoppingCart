import React, { Component, Fragment } from 'react'
import './App.scss';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import CartList from './components/CartList';


import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';

export default class App extends Component {  
    

    render() {
        return (
            <Fragment>
                <CartProvider>
                <ProductsProvider>
                    <header className="header">
                        <div className="wrap">
                            <Navbar />
                        </div>
                    </header>               
                    <CartList />
                    <Hero />
                    <div className="wrap">                       
                        <Products />
                    </div>
                    </ProductsProvider>
                    </CartProvider>
            </Fragment>
        )
        
    }
    
}

