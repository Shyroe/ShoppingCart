import React from 'react';

import './product.scss';
import { MdShoppingCart } from "react-icons/md";

const Product = (props) => {

        const { product, addToCart } = props;
        return (
            <div className="product-card">
                <figure className="product-card__img-box">
                    <img className="product-card__img" src={product.img} alt=""/>
                    <figcaption onClick={() => addToCart(product.id)} 
                    className="product-card__caption">                       
                        <MdShoppingCart className="product-card__icon" />
                       
                        { product.cta }                    
                        
                    </figcaption>
                </figure>                    

                <h3 className="product-card__name">{product.name}</h3>
                <h4 className="product-card__price">${product.price}</h4>
            </div>
        ) 
}

export default Product
