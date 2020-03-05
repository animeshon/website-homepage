import React from 'react';

import SubscriptionForm from './SubscriptionForm';

import Hero from '../assets/hero-slogan-white.png';
import Brand from '../assets/animeshon-logo-white.png';

import './Header.scss';

const Header = ({ valueHeader, typeFunction }) => (
    <header className="header">
        <img className="brand" src={Brand} alt="Animeshon Logo" />
        <div className="subscription-box">
            <h1>
                <img className="slogan" src={Hero} alt="Manga Charachters" />
            </h1>
            <h2>Read anywhere. Cancel anytime.</h2>
            <SubscriptionForm
                source="header"
                value={valueHeader}
                typeFunction={typeFunction}
            />
            <p>
                <strong>Subscribe now</strong> and get{' '}
                <strong>2 months for free</strong> when we start ($4.99 /
                months). <br />
                No credit card required
            </p>
        </div>
    </header>
);

export default Header;
