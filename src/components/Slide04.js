import React from 'react';
import classNames from 'classnames';

import './Slide04.scss';
import '../styles/global.scss';

function Slide04 ({ strings, lang }) {
    const ContactInformations = strings.contacts.map(function (el) {
        return(
            <div className="contacts">
                <div className="important-dark responsive--texts">
                    {el.title}
                </div>
                <div className="dark responsive--texts">
                    {el.description}
                </div>
                <a name={el.aria} className="a-button mc-more mc-more-bottom" href={el.link} target="_blank">
                    <span>{el.span}</span>
                </a>
            </div>
        )
    })

    return (
    <div className="contact-feature smartphones-feature">
        <div className="content">
            <h2 className={classNames("h2--komika", "important-dark", {"italic": lang === 'ja'})}>{strings.headline}</h2>
            <div className="contactslist">
                {ContactInformations}
            </div>
        </div>
    </div>
    )
}

export default Slide04;
