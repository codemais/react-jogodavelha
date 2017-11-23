import React, { Component } from 'react';
import Game from './components/Game';

export default class App extends Component {
  render() {
    return (
      <div className="offset-md-3 col-md-6 mt-1">
        <Game />
      </div>
    );
  }
}