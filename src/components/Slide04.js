import React from 'react';

import './Slide04.scss';

function Slide04 ({ strings, lang }) {
    const ContactInformations = strings.contacts.map(function (el) {
        return(
            <div className="contacts">
                <div className="keywords">
                    {el.title}
                </div>
                <div className="description">
                    {el.description}
                </div>
                <a name={el.aria} className="a-button mc-more" href={el.link} target="_blank">
                    <span>{el.span}</span>
                </a>
            </div>
        )
    })

    return (
    <div className="contact-feature smartphones-feature">
        <div className="content">
            <h2 className={lang === 'ja' ? 'italic' : ''}>{strings.headline}</h2>
            <div className="contactslist">
                {ContactInformations}
            </div>
        </div>
    </div>
    )
}

export default Slide04;
