import React from 'react';

import './index.scss';

import CopyRight from '../CopyRight'

import ColorHolder from './ColorHolder'
import ColorModel from './ColorModel'

class Itten extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            forwardColor: 'gray'
        };

        this.onForwardChange = this.onForwardChange.bind(this);
	}

    onForwardChange(value) {
	    this.setState({
            forwardColor: value
        });
    }

	render() {


	    return (
			<div className='bg-impact'>
                <h1>color impact</h1>
                <h2>ground</h2>
                <div className='color_holder_wrap'>
                    <ColorHolder
                        wardColor = 'white'
                        forwardColor = {this.state.forwardColor}
                    />
                    <ColorHolder
                        wardColor= 'black'
                        forwardColor = {this.state.forwardColor}
                    />
                </div>
                <h3>foreground</h3>
                <ColorModel
					onForwardChange = {this.onForwardChange}
                    forwardColor = {this.state.forwardColor}
                />

				{/*<CopyRight />*/}
			</div>
		)
	}
}

export default Itten;
