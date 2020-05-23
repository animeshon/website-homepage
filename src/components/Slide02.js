import React from 'react';

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

const AppSupport = ({ lang, strings }) => (
    <div className="manga-feature devices-feature">
        <h2 className={lang === 'jp' ? 'italic' : ''}>{strings.headline}</h2>
        <div className="content support">
            <div className="feature01">
                <img src={Phone} alt={strings.mobileIcon} />
                <strong>{strings.featureDeviceMobile}</strong>
                <div className="logo-container">
                    <img src={AppStore} alt={strings.appStoreAltText} />
                    <img src={PlayStore} alt={strings.googlePlayAltText} />
                </div>
            </div>
            <div className="feature02">
                <img src={Tablet} alt={strings.tabletIcon} />
                <strong>{strings.featureDeviceTablet}</strong>
                <div className="logo-container">
                    <img src={AppStore} alt={strings.appStoreAltText} />
                    <img src={PlayStore} alt={strings.googlePlayAltText} />
                </div>
            </div>
            <div className="feature03">
                <img src={Laptop} alt={strings.computerIcon} />
                <strong>{strings.featureDeviceComputer}</strong>
                <div className="logo-container browser">
                    <img src={Chrome} alt={strings.chromeAltText} />
                    <img src={Firefox} alt={strings.firefoxAltText} />
                    <img src={Edge} alt={strings.edgeAltText} />
                    <img src={Safari} alt={strings.safariAltText} />
                </div>
            </div>
        </div>
    </div>
);

export default AppSupport;
