import React from 'react';

import './FAQ.scss';

const FAQ = ({ accordionOnClick, strings }) => (
    <div className="manga-feature faq-feature">
<<<<<<< HEAD
<<<<<<< HEAD
        <h2>
            <img src={Headline} alt={strings.headline} />
        </h2>
=======
        <h2>{strings.headline}</h2>
>>>>>>> added all the changes needed
        <div className="accordion">
            {strings.questionTwo && (
                <div
                    className="question"
                    data-collapsed={1}
                    onClick={e => accordionOnClick(e)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                >
                    <p data-collapsed={1}>{strings.questionOne}</p>
                    <div data-collapsed={1} className="contents">
                        <p>{strings.responseOne}</p>
                    </div>
                </div>
            )}
            {strings.questionTwo && (
                <div
                    className="question"
                    data-collapsed={2}
                    onClick={e => accordionOnClick(e)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                >
                    <p data-collapsed={2}>{strings.questionTwo}</p>
                    <div data-collapsed={2} className="contents">
                        <p>{strings.responseTwo}</p>
                    </div>
                </div>
<<<<<<< HEAD
            </div>
            <div
                className="question"
                data-collapsed={3}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={3}>{strings.questionThree}</p>
                <div data-collapsed={3} className="contents">
                    <p>{strings.responseThree}</p>
=======
        <h2>{strings.headline}</h2>
        <div className="accordion">
            {strings.questionTwo && (
                <div
                    className="question"
                    data-collapsed={1}
=======
            )}
            {strings.questionThree && (
                <div
                    className="question"
                    data-collapsed={3}
>>>>>>> added all the changes needed
                    onClick={e => accordionOnClick(e)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                >
<<<<<<< HEAD
                    <p data-collapsed={1}>{strings.questionOne}</p>
                    <div data-collapsed={1} className="contents">
                        <p>{strings.responseOne}</p>
                    </div>
                </div>
            )}
            {strings.questionTwo && (
                <div
                    className="question"
                    data-collapsed={2}
                    onClick={e => accordionOnClick(e)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                >
                    <p data-collapsed={2}>{strings.questionTwo}</p>
                    <div data-collapsed={2} className="contents">
                        <p>{strings.responseTwo}</p>
                    </div>
                </div>
            )}
            {strings.questionThree && (
                <div
                    className="question"
                    data-collapsed={3}
                    onClick={e => accordionOnClick(e)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                >
                    <p data-collapsed={3}>{strings.questionThree}</p>
                    <div data-collapsed={3} className="contents">
                        <p>{strings.responseThree}</p>
                    </div>
>>>>>>> 8a99de9a1cb76cde78c7a6a895612bd5fcdfc6ab
                </div>
            )}
=======
                    <p data-collapsed={3}>{strings.questionThree}</p>
                    <div data-collapsed={3} className="contents">
                        <p>{strings.responseThree}</p>
                    </div>
                </div>
            )}
>>>>>>> added all the changes needed
            <div
                className="question hidden"
                data-collapsed={4}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
<<<<<<< HEAD
<<<<<<< HEAD
                <p data-collapsed={4}>{strings.questionFour}</p>
                <div data-collapsed={4} className="contents">
                    <p>{strings.responseFour}</p>
                </div>
=======
=======
>>>>>>> added all the changes needed
                {strings.questionFour && [
                    <p key={1} data-collapsed={4}>
                        {strings.questionFour}
                    </p>,
                    <div key={2} data-collapsed={4} className="contents">
                        <p>{strings.responseFour}</p>
                    </div>,
                ]}
<<<<<<< HEAD
>>>>>>> 8a99de9a1cb76cde78c7a6a895612bd5fcdfc6ab
=======
>>>>>>> added all the changes needed
            </div>
        </div>
    </div>
);

export default FAQ;
