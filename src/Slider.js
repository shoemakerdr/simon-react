import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    render() {
        return (
            <div className='Slider'>
                <p>{' ON'}</p>
                <div className='switch-path'>
                    <div className='switch'></div>
                </div>
                <p>{'OFF'}</p>
            </div>
        );
    }
}

export default Slider;
