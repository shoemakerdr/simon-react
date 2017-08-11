import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        return (
            <div className='ControlPanel'>
                <div className='wrapper'>
                    <div className='count'>{this.props.count}</div>
                    <button className='start'>Start</button>
                    <button className='strict'>Strict</button>
                    <div className='on-off'>On</div>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
