import React from 'react'
import './Board.css'
import {green, activeGreen, red, activeRed, yellow, activeYellow, blue, activeBlue} from './BoardStyles'

const Board = props => {
    return (
        <div className='Board'>
            <div
                onClick={() => props.checkUserInput(1)}
                style={props.colors.green ? activeGreen : green}
                className='green'></div>
            <div
                onClick={() => props.checkUserInput(2)}
                style={props.colors.red ? activeRed : red}
                className='red'></div>
            <div
                onClick={() => props.checkUserInput(3)}
                style={props.colors.yellow ? activeYellow : yellow}
                className='yellow'></div>
            <div
                onClick={() => props.checkUserInput(4)}
                style={props.colors.blue ? activeBlue : blue}
                className='blue'></div>
        </div>
    )
}

export default Board
