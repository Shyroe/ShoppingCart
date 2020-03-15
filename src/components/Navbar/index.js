import React, { useContext } from 'react'


import { FiAlignJustify } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import './navbar.scss';

import logo from '../../images/logo.svg';

import { CartContext } from '../../context/CartContext';

const Navbar = () => {
   
        const { cartListHandle, cartCount } = useContext(CartContext);
        return (
            <nav className="navbar">
                <FiAlignJustify className="bars" />
                <img src={logo} alt="logo image"/>
                <div className="navbar__cart" onClick={cartListHandle}>
                <span className="quantity">{cartCount}</span>
                    <MdAddShoppingCart className="cart-plus" />
                    
                </div>
            </nav>
        )
    }

export default Navbar
