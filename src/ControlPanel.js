import React, { Component } from 'react';
import './ControlPanel.css';
import Slider from './Slider';

class ControlPanel extends Component {
    render() {
        return (
            <div className='ControlPanel'>
                <div className='wrapper'>
                    <div className='count'>{this.props.count}</div>
                    <button className='start'>Start</button>
                    <button className='strict'>Strict</button>
                    <Slider />
                </div>
            </div>
        );
    }
}

export default ControlPanel;
