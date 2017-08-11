import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
    render() {
        return (
            <div className='Board'>
                <div className='green'></div>
                <div className='red'></div>
                <div className='yellow'></div>
                <div className='blue'></div>
            </div>
        );
    }
}

export default Board;
