import React from 'react';

import Phones from '../assets/phones.png';

import './Slide01.scss';

const MangaFeature = ({ strings }) => (
    <div className="manga-feature smartphones-feature">
        <h2>{strings.headline}</h2>
        <div className="content">
            <div className="texts">
<<<<<<< HEAD
                <h4>{strings.featureOne}</h4>
                <h4>{strings.featureTwo}</h4>
                <h4>{strings.featureThree}</h4>
                <h4>{strings.featureFour}</h4>
                <hr />
                <h3>{strings.priceFeature}</h3>
=======
                {strings.featureOne && <h4>{strings.featureOne}</h4>}
                {strings.featureTwo && <h4>{strings.featureTwo}</h4>}
                {strings.featureThree && <h4>{strings.featureThree}</h4>}
                {strings.featureFour && <h4>{strings.featureFour}</h4>}
                {strings.featureFive && <h4>{strings.featureFive}</h4>}
                {strings.featureSix && <h4>{strings.featureSix}</h4>}
                {strings.featureSeven && <h4>{strings.featureSeven}</h4>}
                <hr />
                {strings.priceFeature && <h3>{strings.priceFeature}</h3>}
>>>>>>> 8a99de9a1cb76cde78c7a6a895612bd5fcdfc6ab
            </div>
            <div className="phones">
                <img src={Phones} alt={strings.imageOneAltText} />
            </div>
        </div>
    </div>
);

export default MangaFeature;
