import React, { Component } from 'react';
import Board from './Board';
import Terminal from './Terminal';
import Panel from './Panel';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.squares = [];
    this.terminal = null;
    this.state = this.initialState();
  }

  initialState(symbol = 'X') {
    return {
      symbol: symbol,
      xIsCurrentSymbol: symbol === 'X' ? true : false,
      finished: false,
      plays: 0
    };
  }

  checkRules(rules, symbol) {
    let check = false;
    rules.forEach(rule => {
      let filtered = this.squares.filter(function(square) {
        return (
          rule.includes(square.props.index) && square.state.symbol === symbol
        );
      });

      if (filtered.length === 3) {
        check = true;
        filtered.forEach(square => {
          square.setState({ color: '#3ADF00' });
        });
        this.setState({ finished: true }, function() {
          this.write("'" + symbol + "' foi o vencedor!!!");
        });
      }
      return;
    });

    return check;
  }

  isWinner() {
    const rules = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6] // diagonais
    ];
    let { xIsCurrentSymbol, symbol, plays } = this.state;
    let isWinner = this.checkRules(rules, symbol);

    if (plays === this.squares.length && !isWinner) {
      this.setState({ finished: true }, function() {
        this.write('Ops... Deu velha!!! Não houve vencedor.');
      });
    } else {
      let nextSymbol = xIsCurrentSymbol ? 'O' : 'X';
      this.setState({
        symbol: nextSymbol,
        xIsCurrentSymbol: !xIsCurrentSymbol
      });
    }
  }

  update(index) {
    let { symbol, plays } = this.state;
    this.write('Última jogada: ' + symbol + ' quadrado [' + index + ']');
    this.setState({ plays: plays + 1 }, function() {
      this.isWinner();
    });
  }

  reset(symbol) {
    this.setState(this.initialState(symbol));
    this.terminal.reset();
    this.squares.forEach(square => {
      square.reset();
    });
  }

  write(text) {
    this.terminal.write(text);
  }

  addSquare(square) {
    this.squares.push(square);
  }

  setTerminal(terminal) {
    this.terminal = terminal;
  }

  render() {
    return (
      <div className="row  mt-5">
        <div className="col-md-4 terminal">
          <Terminal callbackSetTerminal={terminal => this.setTerminal(terminal)} />
        </div>
        <div className="col-md-4">
          <Board
            currentSymbol={this.state.symbol}
            isGameOver={this.state.finished}
            callbackParentAddSquare={square => this.addSquare(square)}
            callbackParentUpdateGame={index => this.update(index)}
          />
        </div>
        <div className="col-md-4">
          <Panel callbackParentResetGame={symbol => this.reset(symbol)} />
        </div>
      </div>
    );
  }
}
