import React from 'react';

import Headline from '../assets/feature01-headline.png';
import Phones from '../assets/phones.png';

import './Slide01.scss';

const MangaFeature = () => (
    <div className="manga-feature smartphones-feature">
        <h2>
            <img src={Headline} alt="Better Manga Experience" />
        </h2>
        <div className="content">
            <div className="texts">
                <h4>No more bad translations</h4>
                <h4>No aggressive advertisement</h4>
                <h4>Huge amount of mangas</h4>
                <h4>Support new artists and mangas</h4>
                <hr />
                <h3>Only $4.99 / per months for your daily manga urge</h3>
            </div>
            <div className="phones">
                <img src={Phones} alt="iPhones " />
            </div>
        </div>
    </div>
);

export default MangaFeature;
