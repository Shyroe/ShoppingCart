import React, { Fragment, useContext } from 'react';
import './cartlist.scss';

import CartItem from '../CartItem';

import { FiXSquare } from 'react-icons/fi';

import { CartContext } from '../../context/CartContext';
import { productsContext } from '../../context/ProductsContext';

const CartList = () => {
        
    //Clear Cart
    const clearCart = () => {

      
        setCartItems([])

        //Zerar contador de items do cart
        setCartCount(0)
        
        //Zerar TotalPrice
        setTotalPrice(0)       

        //Change Cta Products
        const newProducts = products.map(item => {
            item.cta = 'Add To Cart';
            item.qtd = 1;
             return item
        })        

        setProducts([...newProducts])
      
    }

    const removeCartItem = (id) => {      

        let newItems = cartItems.filter(item => item.id != id)

        console.log('NewItems: ', newItems);
        
        setCartItems([...newItems], () => (
            console.log('CallbackState: ', cartItems)
        ))

        console.log('cartItemsDelete: ', cartItems);

        // SomaPrices
        let somaPrices = newItems.reduce((valAcum, valArr) => {
            let num = parseFloat(valArr.price, 2);
            let soma = num * valArr.qtd            
            return valAcum + soma
        }, 0);
        
        //TotalPrice
        setTotalPrice(Math.round(somaPrices))    
              
        // cartCount--;
        setCartCount(prevState => prevState - 1)
        if(cartCount < 0) {
            // cartCount = 0;
            setCartCount(0);
        }
        
        //Atualizar Products. Cta property
        let newProducts = products.filter(product => product.id != id)

        const selectedItem = products.find(product => product.id == id)
        selectedItem.cta = 'Add To Cart';

        //Insert
        newProducts.push(selectedItem);      

        setProducts([...newProducts])       

    }    
      
   
        const { cartItems, setCartItems, cartListShow, cartCount, setCartCount,
        cartListHandle, totalPrice, setTotalPrice, addQtd, subQtd } = useContext(CartContext)

        const { products, setProducts } = useContext(productsContext)
            
        let cartListToggle = cartListShow ? 'cart cart--open' : 'cart';
        let cartListBackDrop = cartListShow ? 'backDrop--open backDrop' : 'backDrop';

       
        
        return (          

            <div className={cartListBackDrop}>
            <section className={cartListToggle}>
                <FiXSquare onClick={cartListHandle} className="cart__close" />
                <h3 className="cart__title">Your Cart</h3>
                <Fragment>
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} removeCartItem={removeCartItem}
                            addQtd={addQtd} subQtd={subQtd}
                          />

                    ))

                }
                </Fragment>
            <h4 className="cart__total">Your Total: ${totalPrice}</h4>
                <button onClick={clearCart} className="cart__clear">Clear Cart</button>
            </section>
            </div>
            
            
        )   
}

export default CartList
