import React from 'react';
import './ControlPanel.css';
import Slider from './Slider';


const strictStyle = {
    color: 'pink',
    backgroundColor: 'red',
    border: '.1em solid pink'
}

const notStrictStyle = {
    color: 'black',
    backgroundColor: 'white',
    border: '.1em solid black'
}

const padCount = count => (typeof count === 'number' && count < 10) ? `0${count}` : count

const ControlPanel = props => {
    return (
        <div className='ControlPanel'>
            <div className='wrapper'>
                <div className='count'>{padCount(props.count)}</div>
                <div className='buttons'>
                    <button
                        className='start'
                        onClick={props.start}>
                        {(props.hasStarted && props.isOn) ? 'Reset' : 'Start'}
                    </button>
                    <button
                        className='strict'
                        style={props.isStrict ? strictStyle : notStrictStyle}
                        onClick={props.setStrict}>
                    Strict
                    </button>
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
