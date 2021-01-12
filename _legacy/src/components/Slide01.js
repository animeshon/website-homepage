import React from 'react';
import Lottie from 'react-lottie';
import classNames from 'classnames';

import './Slide01.scss';
import '../styles/global.scss';

function Slide01 ({ strings, lang }) {
    const SubSlides = strings.subslides.map(function (el) {
        const keyWords = el.keywords.map(function (keyWord) {
            return(<h4>{keyWord}</h4>)
        })
        return(
            <div className="subslide">
                <div className="keywords responsive--texts important-light">
                    {keyWords}
                </div>
                <div className="description responsive--texts light">
                    {el.description}
                </div>
            </div>
        )
    })

    const lottieOption = {
        loop: true,
        autoplay: true,
        animationData: require('../assets/lotties/lf20_lqsmgn.json'),
        rendererSettings: {
          //hideOnTransparent:true,
          preserveAspectRatio: "YMidxMid meet"
        }
    }

    return (
        <div className="overview-feature smartphones-feature">  
            <div className="content">
                <h2 className={classNames("h2--komika", "important-light", {"italic": lang === 'ja'})}>{strings.headline}</h2>
                <div className="lottie">
                    <Lottie  
                        options={lottieOption}
                        //title={title}
                        //width={200}
                    />
                </div>
                <div className="subslides">
                    {SubSlides}
                </div>
            </div>
        </div>
    );
}

export default Slide01;
