import React from 'react';

import SubscriptionForm from './SubscriptionForm';

import './Trial.scss';

const Trial = ({
    valueTrial,
    typeFunction,
    handleSubmit,
    valueTrialError,
    valueTrialSuccess,
    strings,
    lang,
}) => (
    <div className="manga-feature trial-feature">
        <h2 className={lang === 'ja' ? 'italic' : ''}>{strings.headline}</h2>
        {strings.paragraph && <p className="paragraph">{strings.paragraph}</p>}
        <SubscriptionForm
            value={valueTrial}
            typeFunction={typeFunction}
            handleSubmit={handleSubmit}
            error={valueTrialError !== '' ? true : false}
            labels={{
                placeholder: strings.trialFormPlaceholder,
                buttonLabel: strings.trialFormButton,
            }}
        />
        {valueTrialError === '' ? null : (
            <p className="error">{valueTrialError}</p>
        )}
        {valueTrialSuccess === '' ? null : (
            <p className="success">{valueTrialSuccess}</p>
        )}
    </div>
);

export default Trial;
