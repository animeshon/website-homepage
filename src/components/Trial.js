import React from 'react';

import SubscriptionForm from './SubscriptionForm';

import Headline from '../assets/feature03-headline.png';

import './Trial.scss';

const Trial = ({ valueTrial, typeFunction }) => (
    <div className="manga-feature trial-feature">
        <h2>
            <img src={Headline} alt="Get Your Free Trial" />
        </h2>
        <p className="paragraph">
            Morbi sit amet diam id quam rutrum finibus. Praesent venenatis diam
            nec diam facilisis, ut pharetra quam cursus.
        </p>
        <SubscriptionForm value={valueTrial} typeFunction={typeFunction} />
    </div>
);

export default Trial;
