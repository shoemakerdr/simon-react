import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isOn: props.isOn,
        }
        this.setSlider = this.setSlider.bind(this)
    }

    setSlider() {
        this.setState({
            isOn: !this.state.isOn
        })
        console.log(this.state.isOn)
    }

    onOrOff (isOn) {
        const onStyle = {
            width: '40%',
            height: '100%',
            backgroundColor: 'lightblue',
            position: 'absolute',
            right:'null'
        }
        const offStyle = {
            width: '40%',
            height: '100%',
            backgroundColor: 'lightblue',
            position: 'absolute',
            right: '0'
        }
        return isOn ? onStyle : offStyle
    }

    render() {
        const isRight= (!this.state.isOn) ? '0' : 'null'
        console.log(isRight)
        return (
            <div className='Slider' onClick={this.setSlider}>
                <p>{' ON'}</p>
                <div className='switch-path'>
                    <div className='switch' style={{right: isRight}}></div>
                </div>
                <p>{'OFF'}</p>
            </div>
        );
    }
}

export default Slider;
