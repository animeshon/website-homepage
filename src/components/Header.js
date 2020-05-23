import React from 'react';

import SubscriptionForm from './SubscriptionForm';

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
            <h1 className={lang === 'jp' ? 'italic' : ''}>
                {strings.headerTitle}
            </h1>
            <h2>{strings.headerUnderline}</h2>
            <SubscriptionForm
                source="header"
                value={valueHeader}
                typeFunction={typeFunction}
                handleSubmit={handleSubmit}
                error={valueHeaderError !== '' ? true : false}
                labels={{
                    placeholder: strings.headerFormPlaceholder,
                    buttonLabel: strings.headerFormButton,
                }}
            />
            {valueHeaderError === '' ? null : (
                <p className="error">{valueHeaderError}</p>
            )}
            {valueHeaderSuccess === '' ? null : (
                <p className="success">{valueHeaderSuccess}</p>
            )}
            <p>{strings.headerFormDisclaimer}</p>
        </div>
    </header>
);

export default Header;
