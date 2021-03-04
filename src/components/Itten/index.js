import React from 'react';

import './index.scss';

import CopyRight from '../CopyRight'
import ColorHolder from './ColorHolder'
import ColorModel from './ColorModel'

class Itten extends React.Component {
    state = {
        forwardColor: 'gray'
    };

    onForwardChange = (value) => {
	    this.setState({
            forwardColor: value
        });
    }

	render() {
        const { forwardColor } = this.state;

	    return (
	        <>
                <div className='bg-impact'>
                    <h1>color impact</h1>
                    <h2>ground</h2>

                    <div className='color_holder_wrap'>
                        <ColorHolder
                            wardColor = 'white'
                            forwardColor = { forwardColor }
                        />
                        <ColorHolder
                            wardColor = 'black'
                            forwardColor = { forwardColor }
                        />
                    </div>

                    <h3>foreground</h3>
                    <ColorModel
                        onForwardChange = {this.onForwardChange}
                        forwardColor = { forwardColor }
                    />
                </div>
                <CopyRight />
            </>
		)
	}
}

export default Itten;
