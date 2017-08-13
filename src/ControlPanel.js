import React from 'react';
import './ControlPanel.css';
import Slider from './Slider';


const strictStyle = {
    color: 'pink',
    backgroundColor: 'red',
    border: '.1em solid pink'
}

const notStrictStyle = {}

const isStrictStyle = isStrict => isStrict ? strictStyle : notStrictStyle

const padCount = count => (count === '--' || count > 9) ? count : `0${count}`

const ControlPanel = props => {
    return (
        <div className='ControlPanel'>
            <div className='wrapper'>
                <div className='count'>{padCount(props.count)}</div>
                <div className='buttons'>
                    <button className='start'>Start</button>
                    <button className='strict' style={isStrictStyle(props.isStrict)}>Strict</button>
                </div>
                <Slider
                    isOn={props.isOn}
                    setOnOff={props.setOnOff}
                />
            </div>
        </div>
    )
}

export default ControlPanel;
