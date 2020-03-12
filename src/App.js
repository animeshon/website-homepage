import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { validate, checkValidity } from './resources/validation';

import Header from './components/Header';
import MangaFeature from './components/Slide01';
import AppSupport from './components/Slide02';
import Trial from './components/Trial';
import FAQ from './components/FAQ';

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
        this.setState({
            lang: navigator.language,
            dataLang: stringsLang(navigator.language),
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
        const { lang } = this.state;
        const requestBody = {
            email_address: this.state[e.target.id],
            lang,
        };

        if (checkValidity(this.state[e.target.id]) === true) {
            fetch('http://localhost:3000/addNew', {
                method: 'POST',
                body: JSON.stringify(requestBody),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    return res.json();
                })
                .then(msg => {
                    if (msg.status === 400) {
                        this.setState({
                            [`${e.target.id}Error`]: msg.message,
                        });
                    }
                    if (msg.status === 200) {
                        this.setState({
                            [`${e.target.id}Success`]: msg.message,
                        });
                    }
                })
                .catch(error => {
                    console.log(error);
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
        } = this.state;

        if (dataLang !== undefined) {
            return (
                <StrictMode>
                    <div className="lang-selector" style={{ color: '#fff' }}>
                        <span // eslint-disable-line
                            data-lang="en"
                            onClick={e => this.changeLanguage(e)}
                        >
                            EN
                        </span>
                        &emsp;
                        <span // eslint-disable-line
                            data-lang="it"
                            onClick={e => this.changeLanguage(e)}
                        >
                            IT
                        </span>
                        &emsp;
                        <span // eslint-disable-line
                            data-lang="de"
                            onClick={e => this.changeLanguage(e)}
                        >
                            DE
                        </span>
                    </div>
                    <Header
                        strings={dataLang.header || {}}
                        valueHeader={valueHeader}
                        valueHeaderError={valueHeaderError}
                        valueHeaderSuccess={valueHeaderSuccess}
                        typeFunction={this.handleTypeEmail}
                        handleSubmit={this.handleSubmit}
                    />
                    <MangaFeature strings={dataLang.firstFeature || {}} />
                    <AppSupport strings={dataLang.secondFeature || {}} />
                    <Trial
                        strings={dataLang.trialFeature || {}}
                        valueTrial={valueTrial}
                        valueTrialError={valueTrialError}
                        valueTrialSuccess={valueTrialSuccess}
                        typeFunction={this.handleTypeEmail}
                        handleSubmit={this.handleSubmit}
                    />
                    <FAQ
                        strings={dataLang.faq || {}}
                        accordionSelection={accordionSelection}
                        accordionOnClick={this.accordionOnClick}
                    />
                </StrictMode>
            );
        } else {
            return 'Loading';
        }
    }
}

render(<App />, document.getElementById('root'));
