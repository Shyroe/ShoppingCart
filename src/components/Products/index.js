import React, { useContext } from 'react';

import Product from '../Product';
import  './products.scss';


import { productsContext } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';

 const Products = () => {     
    
        const addToCart = (id) => {        
        
        let selectedItem = products.find(product => (
            product.id == id
        ));
        
        //Change Cta
        selectedItem.cta = 'In Cart';       
                
        cartItems.push(selectedItem);
        // cartCount++;
        setCartCount(prevState => prevState + 1)        

        changePrice();        
       
        //ShowCart    
        setCartListShow(!cartListShow)      
                       
    }


        let { products, setProducts, addToCartShow, 
            setAddToCartShow, inCartShow, setInCartShow } = useContext(productsContext)
        

        let { cartItems, cartCount, setCartCount, setCartListShow, cartListShow, changePrice } = useContext(CartContext);

       
        return (
            <section className="products">            
                    <h2 className="products__title">Products</h2>
                <div className="products-card">
                    {
                        products.map(product => (
                            <Product key={product.id} product={product}
                             addToCart={addToCart} 
                            addToCartShow={addToCartShow} 
                            inCartShow={inCartShow}
                              />
                        ))
                    }
                </div>
            </section>
        )
}


export default Products;
