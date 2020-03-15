import React, { Component } from 'react';

import background from '../../images/hero-bcg.jpeg';
import './hero.scss';
export default class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero__content">
                    <h2 className="hero__title">Forniture Collection</h2>
                    <a href="#" className="hero__button">Shop Now</a>
                </div>
            </section>
        )
    }
}
