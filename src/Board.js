import React from 'react'
import './Board.css'
import {green, activeGreen, red, activeRed, yellow, activeYellow, blue, activeBlue} from './BoardStyles'

const Board = props => {
    return (
        <div className='Board'>
            <div
                style={props.colors.green ? activeGreen : green}
                className='green'></div>
            <div
                style={props.colors.red ? activeRed : red}
                className='red'></div>
            <div
                style={props.colors.yellow ? activeYellow : yellow}
                className='yellow'></div>
            <div
                style={props.colors.blue ? activeBlue : blue}
                className='blue'></div>
        </div>
    )
}

export default Board
