import React from 'react';
import classNames from 'classnames';
import Lottie from 'react-lottie';

import './Slide02.scss';
import '../styles/global.scss';

function Slide02 ({ strings, lang }) {
    const AdditionalInformations = strings.additional.map(function (el) {
        return(
            <div className="additionalinfo ">
                <span className="responsive--texts important-dark">
                    {el.title}
                </span>
                <span className="responsive--texts dark">
                    {el.description}
                </span>
            </div>
        )
    })

    const lottieOption = {
        loop: true,
        autoplay: true,
        animationData: require('../assets/lotties/lf30_editor_Poez3y.json'),
        rendererSettings: {
          //hideOnTransparent:true,
          preserveAspectRatio: "YMidxMid meet"
        }
    }

    return (
    <div className="user-feature smartphones-feature ipad-feature">
        <div className="content">
            <h2 className={classNames("h2--komika", "important-dark", {"italic": lang === 'ja'})}>{strings.headline}</h2>
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

export default Slide02;
