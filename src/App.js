import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import MangaFeature from './components/Slide01';
import AppSupport from './components/Slide02';
import Trial from './components/Trial';
import FAQ from './components/FAQ';

import './styles/reset.scss';

class App extends React.Component {
    state = {
        valueHeader: '',
        valueTrial: '',
        accordionSelection: 0,
    };

    handleTypeEmail = e => {
        this.setState({
            [e.target.title]: e.target.value,
        });
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

    render() {
        const { valueHeader, valueTrial, accordionSelection } = this.state;

        return (
            <StrictMode>
                <Header
                    valueHeader={valueHeader}
                    typeFunction={this.handleTypeEmail}
                />
                <MangaFeature />
                <AppSupport />
                <Trial
                    valueTrial={valueTrial}
                    typeFunction={this.handleTypeEmail}
                />
                <FAQ
                    accordionSelection={accordionSelection}
                    accordionOnClick={this.accordionOnClick}
                />
            </StrictMode>
        );
    }
}

render(<App />, document.getElementById('root'));
