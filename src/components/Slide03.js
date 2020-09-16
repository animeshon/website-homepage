import React from 'react';

import Lottie from 'react-lottie';

import './Slide03.scss';

function Slide03 ({ strings, lang }) {
    const AdditionalInformations = strings.additional.map(function (el) {
        return(
            <div className="additionalinfo">
                <span className="keywords">
                    {el.title}
                </span>
                <span className="description">
                    {el.description}
                </span>
            </div>
        )
    })

    const lottieOption = {
        loop: true,
        autoplay: true,
        animationData: require('../assets/lotties/lf30_editor_ymNLXC.json'),
        rendererSettings: {
          //hideOnTransparent:true,
          preserveAspectRatio: "YMidxMid meet"
        }
    }

    return (
    <div className="dev-feature smartphones-feature ipad-feature">
        <div className="content">
            <h2 className={lang === 'ja' ? 'italic' : ''}>{strings.headline}</h2>
            <h3>{strings.subline}</h3>
            <div className="lottie">
                <Lottie  
                    options={lottieOption}
                    //title={title}
                    //width={200}
                />
            </div>
            {AdditionalInformations}
        </div>
    </div>
    )
}

export default Slide03;
