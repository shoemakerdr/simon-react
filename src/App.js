import React, { Component } from 'react';
import Board from './Board';
import ControlPanel from './ControlPanel';
import './App.css';

const props = {
    count: 4
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <ControlPanel count={props.count} />
      </div>
    );
  }
}

export default App;
