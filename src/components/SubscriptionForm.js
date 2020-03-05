import React from 'react';

import './SubscriptionForm.scss';

const SubscriptionForm = ({ source, value, typeFunction }) => (
    <div
        id="mc_embed_signup"
        className={
            source === 'header' ? 'from-header' : 'from-subscription-box'
        }
    >
        <form
            action="https://animeshon.us20.list-manage.com/subscribe/post?u=50bc4bc337ccf99d1732c52c6&amp;id=eb10f10fbc"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
        >
            <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                    <input
                        aria-label="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={e => typeFunction(e)}
                        defaultValue={value}
                        name="EMAIL"
                        title={
                            source === 'header' ? 'valueHeader' : 'valueTrial'
                        }
                        className="required email"
                        id="mce-EMAIL"
                    />
                </div>
                <div id="mce-responses" className="clear">
                    <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                    />
                    <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                    />
                </div>
                <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                >
                    <input
                        type="text"
                        name="b_50bc4bc337ccf99d1732c52c6_eb10f10fbc"
                        tabIndex="-1"
                        defaultValue=""
                    />
                </div>
                <input
                    aria-label="Join Now"
                    type="submit"
                    tabIndex="0"
                    aria-pressed="false"
                    value="Join Now"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                />
            </div>
        </form>
    </div>
);

export default SubscriptionForm;
