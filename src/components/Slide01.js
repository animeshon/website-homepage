import React from 'react';
import Lottie from 'react-lottie';

import './Slide01.scss';

function Slide01 ({ strings, lang }) {
    const SubSlides = strings.subslides.map(function (el) {
        const keyWords = el.keywords.map(function (keyWord) {
            return(<h4>{keyWord}</h4>)
        })
        return(
            <div className="subslide">
                <div className="keywords">
                    {keyWords}
                </div>
                <div className="description">
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
            <h2 className={lang === 'ja' ? 'italic' : ''}>{strings.headline}</h2>
            <div className="content">
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
