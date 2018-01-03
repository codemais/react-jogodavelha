import React, { Component } from 'react';
import Game from './components/Game';
import './assets/bootstrap.css';
import './assets/square.css';
import './assets/terminal.css';
import './assets/board.css';
import './assets/app.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Jogo da Velha</h1>
        <Game />
      </div>
    );
  }
}
