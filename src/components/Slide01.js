import React from 'react';

import Phones from '../assets/phones.png';

import './Slide01.scss';

const MangaFeature = ({ strings, lang }) => (
    <div className="manga-feature smartphones-feature">
        <h2 className={lang === 'jp' ? 'italic' : ''}>{strings.headline}</h2>
        <div className="content">
            <div className="texts">
                {strings.featureOne && <h4>{strings.featureOne}</h4>}
                {strings.featureTwo && <h4>{strings.featureTwo}</h4>}
                {strings.featureThree && <h4>{strings.featureThree}</h4>}
                {strings.featureFour && <h4>{strings.featureFour}</h4>}
                {strings.featureFive && <h4>{strings.featureFive}</h4>}
                {strings.featureSix && <h4>{strings.featureSix}</h4>}
                {strings.featureSeven && <h4>{strings.featureSeven}</h4>}
                <hr />
                {strings.priceFeature && <h3>{strings.priceFeature}</h3>}
            </div>
            <div className="phones">
                <img src={Phones} alt={strings.imageOneAltText} />
            </div>
        </div>
    </div>
);

export default MangaFeature;
