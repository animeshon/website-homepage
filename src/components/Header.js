import React from 'react';
import parse from 'html-react-parser';

import Brand from '../assets/new-animeshon-logo-white.png';

import './Header.scss';

const Header = ({
    valueHeader,
    typeFunction,
    handleSubmit,
    valueHeaderError,
    valueHeaderSuccess,
    strings,
    lang,
}) => (
    <header className="header">
        <img className="brand" src={Brand} alt="Animeshon Logo" />
        <div className="subscription-box">
            <h1 className={lang === 'ja' ? 'italic' : ''}>
                {strings.headerTitle}
            </h1>
            <h2>{strings.headerUnderline}</h2>
        </div>
    </header>
);

export default Header;
