import React from 'react';

import './FAQ.scss';

function FAQ ({ accordionOnClick, strings, lang }) {
    const faqs = strings.questions.map(function (el, index) {
        return(
            <div
                className="question"
                data-collapsed={index}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={index}>{el.question}</p>
                <div data-collapsed={index} className="contents">
                    <p>{el.answer}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="manga-feature faq-feature">
            <h2 className={lang === 'ja' ? 'italic' : ''}>{strings.headline}</h2>
            <div className="accordion">
                {faqs}
            </div>
        </div>
    )
}

export default FAQ;
