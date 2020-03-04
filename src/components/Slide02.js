import React from 'react';

import Headline from '../assets/feature02-headline.png';
import Phone from '../assets/smartphone-icon.png';
import Tablet from '../assets/tablet-icon.png';
import Laptop from '../assets/laptop-icon.png';
import AppStore from '../assets/appstore-badge.png';
import PlayStore from '../assets/play-store-badge.png';
import Chrome from '../assets/chrome-icon.png';
import Firefox from '../assets/firefox-icon.png';
import Edge from '../assets/edge-icon.png';
import Safari from '../assets/safari-icon.png';

import './Slide02.scss';

const AppSupport = () => (
    <div className="manga-feature devices-feature">
        <h2>
            <img src={Headline} alt="Better Manga Experience" />
        </h2>
        <div className="content support">
            <div className="feature01">
                <img src={Phone} alt="Smartphone Icon" />
                <strong>Mobile</strong>
                <div className="logo-container">
                    <img src={AppStore} alt="Apple Store Badge" />
                    <img src={PlayStore} alt="Play Store Badge" />
                </div>
            </div>
            <div className="feature02">
                <img src={Tablet} alt="Tablet Icon" />
                <strong>Tablet</strong>
                <div className="logo-container">
                    <img src={AppStore} alt="Apple Store Badge" />
                    <img src={PlayStore} alt="Play Store Badge" />
                </div>
            </div>
            <div className="feature03">
                <img src={Laptop} alt="Computer Icon" />
                <strong>Computer</strong>
                <div className="logo-container browser">
                    <img src={Chrome} alt="Chrome Browser Icon" />
                    <img src={Firefox} alt="Firefox Browser Icon" />
                    <img src={Edge} alt="Edge Browser Icon" />
                    <img src={Safari} alt="Safari Browser Icon" />
                </div>
            </div>
        </div>
    </div>
);

export default AppSupport;
