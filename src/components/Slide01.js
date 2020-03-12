import React from 'react';

import Headline from '../assets/feature01-headline.png';
import Phones from '../assets/phones.png';

import './Slide01.scss';

const MangaFeature = ({ strings }) => (
    <div className="manga-feature smartphones-feature">
        <h2>
            <img src={Headline} alt="Better Manga Experience" />
        </h2>
        <div className="content">
            <div className="texts">
                <h4>{strings.featureOne}</h4>
                <h4>{strings.featureTwo}</h4>
                <h4>{strings.featureThree}</h4>
                <h4>{strings.featureFour}</h4>
                <hr />
                <h3>{strings.priceFeature}</h3>
            </div>
            <div className="phones">
                <img src={Phones} alt={strings.imageOneAltText} />
            </div>
        </div>
    </div>
);

export default MangaFeature;
