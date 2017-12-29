import React, { Component } from 'react';
import Board from './Board';
import Terminal from './Terminal';
import Panel from './Panel';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.board = null;
    this.terminal = null;
    this.state = this.initialState();
  }

  initialState(symbol = 'X') {
    return {
      symbol: symbol,
      plays: 0,
      xIsCurrentSymbol: symbol === 'X' ? true : false
    };
  }

  winnerNotify() {
    this.write("'" + this.state.symbol + "' foi o vencedor!!!");
  }

  actionNotify(index) {
    let { symbol, plays, xIsCurrentSymbol } = this.state;
    this.write('Última jogada: ' + symbol + ' quadrado [' + index + ']');
    let nextSymbol = xIsCurrentSymbol ? 'O' : 'X';

    this.setState({
      plays: plays + 1,
      symbol: nextSymbol,
      xIsCurrentSymbol: !xIsCurrentSymbol
    }, function() {
      if (this.state.plays > 8) {
        this.board.disableSquares();
        this.write('Ops... Deu velha!!! Não houve vencedor.');
      }
    });
  }

  reset(symbol) {
    this.setState(this.initialState(symbol));
    this.terminal.reset();
    this.board.reset();
  }

  write(text) {
    this.terminal.write(text);
  }

  setBoard(board) {
    this.board = board;
  }

  setTerminal(terminal) {
    this.terminal = terminal;
  }

  render() {
    return (
      <div className="row  mt-5">
        <div className="col-md-4 terminal">
          <Terminal gameSetTerminal={ terminal => this.setTerminal(terminal) } />
        </div>
        <div className="col-md-4">
          <Board
            currentSymbol={ this.state.symbol }
            gameSetBoard={ board => this.setBoard(board) }
            gameActionNotify={ index => this.actionNotify(index) }
            gameWinnerNotify={ () => this.winnerNotify() }
          />
        </div>
        <div className="col-md-4">
          <Panel gameReset={ symbol => this.reset(symbol) } />
        </div>
      </div>
    );
  }
}
