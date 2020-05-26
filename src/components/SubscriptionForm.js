import React from 'react';

import './SubscriptionForm.scss';

const SubscriptionForm = ({
    source,
    value,
    typeFunction,
    handleSubmit,
    labels,
    error,
}) => {
    console.log(error);
    return (
        <div
            id="mc-signup"
            className={
                source === 'header' ? 'from-header' : 'from-subscription-box'
            }
        >
            <form
                onSubmit={e => handleSubmit(e)}
                id={source === 'header' ? 'valueHeader' : 'valueTrial'}
            >
                <div id="mc-signup-scroll">
                    <div className="mc-field-group">
                        <input
                            aria-label="email"
                            type="email"
                            placeholder={labels.placeholder}
                            onChange={e => typeFunction(e)}
                            defaultValue={value}
                            title={
                                source === 'header'
                                    ? 'valueHeader'
                                    : 'valueTrial'
                            }
                            className={`required email${error ? ' error' : ''}`}
                            id="mce-EMAIL"
                        />
                    </div>
                    <input
                        aria-label={labels.buttonLabel}
                        type="submit"
                        tabIndex="0"
                        value={labels.buttonLabel}
                        name="subscribe"
                        id="mc-subscribe"
                        className="button"
                    />
                </div>
            </form>
        </div>
    );
};

export default SubscriptionForm;
