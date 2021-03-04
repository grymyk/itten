import React from "react";

function ColorButton(props) {
    let {value, handleClick, cls} = props;

    return (
        <button
            value = {value}
            onClick = {handleClick}
            className = {cls}
        >
        </button>
    )
}

export default ColorButton;
