import React from 'react';
import './Slider.css';

const onStyle = {
    right:'60%',
    left: '0'
}
const offStyle = {
    right:'0',
    left: '60%'
}

const Slider = props => {
    return (
        <div className='Slider' onClick={props.setOnOff}>
            <p>{'ON'}</p>
            <div className='switch-path'>
                <div className='switch' style={props.isOn ? onStyle : offStyle}></div>
            </div>
            <p>{'OFF'}</p>
        </div>
    )
}

export default Slider;
