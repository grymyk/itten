import React from 'react'

import './index.scss'

class ColorHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)

        let {forwardColor, wardColor} = this.props;

        let clsForwardBg = "forward " + forwardColor;
        let clswardBg = "ward " + wardColor;

        return (
            <div className="main_bg">
                <div className={clswardBg}>
                    <div className={clsForwardBg}></div>
                </div>
            </div>
        )
    }
}

export default ColorHolder