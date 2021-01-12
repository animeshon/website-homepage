import React from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';

import './Slide03.scss';
import '../styles/global.scss';

function Slide03 ({ strings, lang }) {
    const AdditionalInformations = strings.additional.map(function (el) {
        return(
            <div className="additionalinfo">
                <span className="important-light responsive--texts">
                    {el.title}
                </span>
                <span className="light responsive--texts">
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
            <h2 className={classNames("h2--komika", "important-light", {"italic": lang === 'ja'})}>{strings.headline}</h2>
            <div className="info">
                <h3>{strings.subline}</h3>
                <a name={strings.doc.aria} className="a-button mc-more mc-more--light" href={strings.doc.link} target="_blank">
                    <span>{strings.doc.span}</span>
                </a>
            </div>
            
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
