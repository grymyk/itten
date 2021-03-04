import React from 'react'

import './index.scss'

function ColorHolder(props) {
    const { forwardColor, wardColor } = props;
    const clsForwardBg = 'forward ' + forwardColor;
    const clswardBg = 'ward ' + wardColor;

    return (
        <div className="main_bg">
            <div className={clswardBg}>
                  <div className={clsForwardBg}> </div>
            </div>
        </div>
    )
}

export default ColorHolder
