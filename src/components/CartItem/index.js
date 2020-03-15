import React from 'react';


import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './cartitem.scss';

const CartItem = (props) => {   

        const { cartItem, addQtd, subQtd, removeCartItem } = props;
        return (
            <div className="cart-product" id={cartItem.id}>
                <img src={cartItem.img} className="cart-product__img" alt=""/>
                <div className="cart-product__info">
                <h4 className="cart-product__name">{cartItem.name}</h4>
                <h4 className="cart-product__price">{cartItem.price}</h4>
                    <button onClick={() => removeCartItem(cartItem.id)} className="cart-product__remove">remove</button>
                </div>
                <div className="cart-product__quantity">
                    <MdKeyboardArrowUp onClick={() => addQtd(cartItem.id)} className="cart-product__sub" />
                <h3 className="cart-product__value">{cartItem.qtd}</h3>
                    <MdKeyboardArrowDown onClick={() => subQtd(cartItem.id)} className="cart-product__add" />
                </div>
            </div>
        ) 
}

export default CartItem
