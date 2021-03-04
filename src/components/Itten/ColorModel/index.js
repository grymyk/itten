import React from 'react'

import './index.scss'
import ColorButton from "./ColorButton";
import btnColors from  './btnColors.json';

class ColorModel extends React.Component {
    handleClick = (event) => {
        this.props.onForwardChange(event.target.value)
    }

    render() {
        const { forwardColor } = this.props;

        const textToColor = (color, index) => {
            let cls = color;

            if (forwardColor === color) {
                cls += ' clicked'
            }

            return <ColorButton
                key = { index.toString() }
                value = { color }
                handleClick = { this.handleClick }
                cls = { cls }
            />
        }

        const listColorBtn = btnColors['colors'].map(textToColor);

        return (
            <div className="rgb">{ listColorBtn }</div>
        )
    }
}

export default ColorModel;
