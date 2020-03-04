import React from 'react';

import Headline from '../assets/feature04-headline.png';

import './FAQ.scss';

const FAQ = ({ accordionOnClick }) => (
    <div className="manga-feature faq-feature">
        <h2>
            <img src={Headline} alt="FAQ" />
        </h2>
        <div className="accordion">
            <div
                className="question"
                data-collapsed={1}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={1}>When Animeshon will be released?</p>
                <div data-collapsed={1} className="contents">
                    <p>
                        Nullam sit amet vulputate lorem, in venenatis dui.
                        Vestibulum ut purus sollicitudin, imperdiet diam non,
                        placerat erat. Duis felis quam, auctor a consequat ac,
                        consequat at enim. Suspendisse quis volutpat eros.
                        Vivamus at pulvinar arcu. Vivamus suscipit urna in
                        dapibus condimentum. Integer hendrerit augue nibh,
                        dapibus accumsan tellus porttitor et. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Nulla luctus
                        purus eget augue molestie mollis. Phasellus diam mi,
                        gravida at imperdiet non, congue ut libero. Maecenas sem
                        dolor, posuere nec elementum a, maximus id tellus.
                        Nullam porttitor ultrices felis, et ornare purus
                        scelerisque at.
                    </p>
                </div>
            </div>
            <div
                className="question"
                data-collapsed={2}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={2}>
                    What devices are compatible with Animeson?
                </p>
                <div data-collapsed={2} className="contents">
                    <p>
                        Ut id sem id sapien finibus venenatis vitae a dui.
                        Mauris efficitur erat in finibus volutpat. Aenean
                        facilisis tortor ex, eu fringilla mi ornare vel. Cras
                        finibus interdum nulla ac rutrum. Morbi facilisis, ex in
                        vestibulum cursus, felis eros vulputate lacus, eget
                        mattis lacus orci non metus. Integer egestas tortor a
                        metus malesuada, vel aliquam arcu accumsan. Praesent ac
                        accumsan sapien. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Nunc auctor hendrerit purus, gravida aliquam nulla
                        venenatis nec. Ut id justo iaculis, semper nisl a,
                        hendrerit lectus. Donec nec tellus in lacus cursus
                        interdum. Vestibulum nec nulla vehicula, convallis dolor
                        sed, suscipit magna. Ut convallis, ante nec ornare
                        molestie, augue nibh pharetra nisi, in efficitur massa
                        arcu a quam. Quisque nec sollicitudin mi.
                    </p>
                </div>
            </div>
            <div
                className="question"
                data-collapsed={3}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={3}>What is the necessary bandwidth?</p>
                <div data-collapsed={3} className="contents">
                    <p>
                        Pellentesque nec urna egestas eros imperdiet vehicula.
                        Quisque fringilla nisl ligula, non rhoncus urna feugiat
                        sed. Integer sit amet ullamcorper arcu. Etiam rhoncus
                        sit amet odio eu posuere. Suspendisse et convallis odio,
                        nec vehicula neque. Cras fringilla augue sed mauris
                        scelerisque, eget condimentum velit placerat. Nunc vitae
                        vehicula odio, eu sagittis odio. Nulla tempus justo
                        velit, ultricies porta lectus consectetur vel.
                    </p>
                </div>
            </div>
            <div
                className="question"
                data-collapsed={4}
                onClick={e => accordionOnClick(e)}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
            >
                <p data-collapsed={4}>How do I create a Animeshon account?</p>
                <div data-collapsed={4} className="contents">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam enim lorem, pharetra consectetur aliquet sit amet,
                        varius ac augue. Suspendisse posuere ante a tempor
                        porttitor. Nunc imperdiet eu ex id commodo. Phasellus
                        lectus erat, accumsan posuere tristique sit amet,
                        ultrices sit amet erat. Suspendisse potenti. Phasellus
                        eu gravida nulla. Nam vel lectus dignissim, cursus lacus
                        a, vehicula arcu. Suspendisse id tincidunt sapien. Proin
                        vestibulum vel velit a vehicula. Aliquam eu ultricies
                        nulla, sed mattis neque. Nam ultrices eros in iaculis
                        pulvinar. Fusce rhoncus ligula eu velit mattis, eget
                        finibus ante lacinia.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default FAQ;
