import React from 'react'

import './index.scss'

const buttons = [
    {
        value: 'red',
        cls: 'red',
    }, {
        value: 'green',
        cls: 'green',
    }, {
        value: 'blue',
        cls: 'blue',
    }, {
        value: 'gray',
        cls: 'gray',
    }
];

function ColorButton(props) {
    let {value, handleClick, cls} = props.data;

    return (
        <button
            value={value}
            onClick = {handleClick}
            className={cls}
        >
        </button>
    )
}

class ColorModel extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.props.onForwardChange(event.target.value)
    }

    render() {
        let {forwardColor} = this.props;

        const listColorBtn = buttons.map( (elem, index) => {
            elem.handleClick = this.handleClick;

            elem.cls = elem.value;

            if (forwardColor === elem.value) {
                elem.cls += ' clicked';
            }

            return <ColorButton
                key = {index.toString()}
                data = {elem}
            />
        });

        return (
            <div className='rgb'>{listColorBtn}</div>
        )
    }
}

export default ColorModel;