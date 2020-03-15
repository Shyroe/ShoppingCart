import React, { useState, createContext } from 'react';

export const CartContext = createContext();


export const CartProvider = (props) => {  

    const [cartItems, setCartItems] = useState([]);
    const [cartListShow, setCartListShow] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const cartListHandle = () => {        
        setCartListShow(!cartListShow)
    }

    const changePrice = () => {
       
        // SomaPrices
        let somaPrices = cartItems.reduce((valAcum, valArr) => {           
            let num = parseFloat(valArr.price, 2);
            let soma = num * valArr.qtd           
            return valAcum + soma
        }, 0);       

        console.log('SomaPrices: ', somaPrices)

        //TotalPrice
        setTotalPrice(Math.round(somaPrices))
    }

        

    const addQtd = (id) => {
        
        setCartCount(prevState => prevState + 1)

        let newItems = cartItems.filter(item => item.id != id)
        let selectedItem = cartItems.find(item => item.id == id)
        //Change Qtd
        selectedItem.qtd++;

        //Insert new Qtd
        newItems.push(selectedItem);
        console.log('newItems: ', newItems )

        //Change CartItems
        setCartItems([...newItems])    
       
        
        changePrice();
        
    }

    const subQtd = (id) => {

        //    cartCount--;
        setCartCount(prevState => prevState - 1)
           if(cartCount < 0) {
            //    cartCount = 0;
            setCartCount(0);
           }    

        let newItems = cartItems.filter(item => item.id != id)
        let selectedItem = cartItems.find(item => item.id == id)
      
        //Change Qtd
        selectedItem.qtd--;

        if(selectedItem.qtd <= 0) {
            selectedItem.qtd = 0;

            //Change Cta
            selectedItem.cta = 'Add To Cart';

            //Remove Item
            selectedItem = null;
            
        } else {

            //Insert new Qtd
            newItems.push(selectedItem);
            console.log('newItems: ', newItems )

            //Change CartItems
            setCartItems([...newItems]);      
       
        }
        
         //Change CartItems - Remove Atual Item
         setCartItems([...newItems])        

        changePrice();     
        
        
    }



    return (
        <CartContext.Provider
        value={{
            
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            totalPrice,
            setTotalPrice,
            cartListShow,
            setCartListShow,
            cartListHandle,
            changePrice,
            addQtd,
            subQtd

        }}>
            { props.children }
        </CartContext.Provider>
    )
}