import React, { useState, createContext } from 'react';

export const productsContext = createContext();


import product1 from '../images/product-1.jpeg';
import product2 from '../images/product-2.jpeg';
import product3 from '../images/product-3.jpeg';
import product4 from '../images/product-4.jpeg';
import product5 from '../images/product-5.jpeg';
import product6 from '../images/product-6.jpeg';
import product7 from '../images/product-7.jpeg';
import product8 from '../images/product-8.jpeg';

export const ProductsProvider = (props) => {

    const [addToCartShow, setAddToCartShow] = useState(true)
    const [inCartShow, setInCartShow] = useState(false)
    const [products, setProducts] = useState([
        {
            id: 111,
            img: product1,
            name: 'Queen Panel Bed',
            price: '10.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 222,
            img: product2,
            name: 'Table',
            price: '11.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 333,
            img: product3,
            name: 'Couch',
            price: '49.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 444,
            img: product4,
            name: 'Dresser',
            price: '22.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 555,
            img: product5,
            name: 'Fridge',
            price: '34.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 666,
            img: product6,
            name: 'Single Panel Bed',
            price: '23.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 777,
            img: product7,
            name: 'Twin Panel Bed',
            price: '32.99',
            qtd: 1,
            cta: 'Add To Cart'
        },
        {
            id: 888,
            img: product8,
            name: 'King Panel Bed',
            price: '46.99',
            qtd: 1,
            cta: 'Add To Cart'
        }
    ])  

    return (
        <productsContext.Provider
        value={
            {
                products,
                setProducts,
                addToCartShow,
                setAddToCartShow,
                inCartShow,
                setInCartShow
            }
        }>
            { props.children }
        </productsContext.Provider>
        
    )
}

