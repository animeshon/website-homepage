import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { validate, checkValidity } from './resources/validation';

import Header from './components/Header';
import MangaFeature from './components/Slide01';
import AppSupport from './components/Slide02';
import Trial from './components/Trial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { stringsLang } from './resources/translations';

import './styles/reset.scss';

class App extends React.Component {
    state = {
        valueHeader: '',
        valueTrial: '',
        valueHeaderError: '',
        valueTrialError: '',
        valueHeaderSuccess: '',
        valueTrialSuccess: '',
        accordionSelection: 0,
        lang: 'en',
    };

    componentDidMount() {
        const isoLang = navigator.language;
        const machine = navigator.platform;
        const lang = navigator.language.startsWith('ja') ? 'ja' : 'en';

        this.setState({
            isoLang,
            lang,
            machine,
            dataLang: stringsLang(lang),
        });
    }

    handleTypeEmail = e => {
        this.setState({
            valueHeaderError: '',
            valueTrialError: '',
            [e.target.title]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        e.persist();
        const {
            lang,
            isoLang,
            machine,
            dataLang: { emailResponses },
        } = this.state;
        const requestBody = {
            email: this.state[e.target.id],
            status: 'subscribed',
            language: lang,
            tags: [isoLang, machine],
        };

        const options = {
            method: 'POST',
            body: JSON.stringify(requestBody),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (checkValidity(this.state[e.target.id]) === true) {
            fetch('http://localhost:8080/api/v1/audience', options)
                .then(res => {
                    return res.json();
                })
                .then(msg => {
                    console.log('msg =>', msg);
                    if (
                        msg.code === 500 &&
                        msg.error === 'internal server error'
                    ) {
                        this.setState({
                            [`${e.target.id}Error`]: emailResponses.internalServerError,
                        });
                    }
                    if (
                        msg.code === 400 &&
                        msg.error === 'email in compliance state'
                    ) {
                        requestBody.status = 'pending';

                        fetch('http://localhost:8080/api/v1/audience', {
                            method: 'POST',
                            body: JSON.stringify(requestBody),
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then(res => res.json())
                            .then(msg => {
                                if (
                                    msg.code === 400 &&
                                    msg.error === 'invalid resource'
                                ) {
                                    this.setState({
                                        [`${e.target.id}Error`]: emailResponses.invalidResource,
                                    });
                                }
                            });
                    }
                    if (msg.code === 400 && msg.error === 'invalid resource') {
                        this.setState({
                            [`${e.target.id}Error`]: emailResponses.invalidResource,
                        });
                    }
                    if (
                        msg.code === 400 &&
                        msg.error === 'invalid request audience'
                    ) {
                        this.setState({
                            [`${e.target.id}Error`]: emailResponses.invalidRequestAudience,
                        });
                    }
                    if (
                        msg.code === 400 &&
                        msg.error === 'origin not allowed'
                    ) {
                        this.setState({
                            [`${e.target.id}Error`]: emailResponses.originNotAllowed,
                        });
                    }
                    if (msg.code === 400 && msg.error === 'bad request') {
                        this.setState({
                            [`${e.target.id}Error`]: emailResponses.badRequest,
                        });
                    }
                    if (msg.code === 204) {
                        this.setState({
                            [`${e.target.id}Error`]: emailResponses.successfulStatus,
                        });
                    }
                })
                .catch(error => {
                    this.setState({
                        [`${e.target.id}Error`]: emailResponses.badRequest,
                    });
                    console.log('error =>', error);

                    throw new Error(error);
                });
        } else {
            const msg = validate(this.state[e.target.id], lang);
            this.setState({
                [`${e.target.id}Error`]: msg,
            });
        }
    };

    accordionOnClick = e => {
        const tabs = document.querySelectorAll('.question .contents');
        this.setState(
            {
                accordionSelection: parseInt(e.target.dataset.collapsed, 10),
            },
            () => {
                const { accordionSelection } = this.state;
                tabs.forEach(tab => {
                    const selected = parseInt(
                        tab.getAttribute('data-collapsed'),
                        10
                    );
                    if (selected === accordionSelection) {
                        tab.classList.toggle('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
            }
        );
    };

    changeLanguage = e => {
        const lang = e.target.dataset.lang;

        this.setState({
            lang,
            dataLang: stringsLang(lang),
        });
    };

    render() {
        const {
            valueHeader,
            valueTrial,
            accordionSelection,
            valueHeaderError,
            valueTrialError,
            valueHeaderSuccess,
            valueTrialSuccess,
            dataLang,
            lang,
        } = this.state;
        if (dataLang !== undefined) {
            return (
                <StrictMode>
                    <div className="lang-selector">
                        <span // eslint-disable-line
                            data-lang="en"
                            onClick={e => this.changeLanguage(e)}
                            className={`flags uk${
                                lang.includes('en') ? ' selected' : ''
                            }`}
                        />
                        <span // eslint-disable-line
                            data-lang="ja"
                            onClick={e => this.changeLanguage(e)}
                            className={`flags jp${
                                lang.includes('ja') ? ' selected' : ''
                            }`}
                        />
                    </div>
                    <Header
                        lang={lang}
                        strings={dataLang.header || {}}
                        valueHeader={valueHeader}
                        valueHeaderError={valueHeaderError}
                        valueHeaderSuccess={valueHeaderSuccess}
                        typeFunction={this.handleTypeEmail}
                        handleSubmit={this.handleSubmit}
                    />
                    <MangaFeature
                        lang={lang}
                        strings={dataLang.firstFeature || {}}
                    />
                    <AppSupport
                        lang={lang}
                        strings={dataLang.secondFeature || {}}
                    />
                    <Trial
                        lang={lang}
                        strings={dataLang.trialFeature || {}}
                        valueTrial={valueTrial}
                        valueTrialError={valueTrialError}
                        valueTrialSuccess={valueTrialSuccess}
                        typeFunction={this.handleTypeEmail}
                        handleSubmit={this.handleSubmit}
                    />
                    <FAQ
                        lang={lang}
                        strings={dataLang.faq || {}}
                        accordionSelection={accordionSelection}
                        accordionOnClick={this.accordionOnClick}
                    />
                    <Footer />
                </StrictMode>
            );
        } else {
            return 'Loading';
        }
    }
}

render(<App />, document.getElementById('root'));
