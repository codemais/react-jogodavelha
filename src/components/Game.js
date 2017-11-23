import React, { Component } from 'react';
import Square from './Square';
import './../bootstrap.css';

export default class Game extends Component {

  constructor() {
    super();
    this.state = {
      symbol: "X", xIsNext: true, trace: new Array(9),
      notice: "", finished: false, plays: 0, head: "Jogador X"
    }
  }

  winnerVerify() {
    let symbol = this.state.symbol;
    let trace = this.state.trace;
    let count = this.state.plays + 1;
    const board = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6],
      [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]
    ];

    this.setState({ plays: count });

    for (let i = 0; i < board.length; i++) {
      if (trace[board[i][0]] === symbol &&
        trace[board[i][1]] === symbol && trace[board[i][2]] === symbol) {
        this.setState({finished: true, notice: "Vencedor!!!",
          head: "Partida encerrada"}
        );
        document.getElementById(board[i][0]).style.backgroundColor = '#01DFA5';
        document.getElementById(board[i][1]).style.backgroundColor = '#01DFA5';
        document.getElementById(board[i][2]).style.backgroundColor = '#01DFA5';
        return
      }
    }

    if (count === trace.length){
      this.setState({ finished: true, head: "Partida empatada!!!",
        notice: "Não houve vencedor!!!" }
      );
    }
  }

  update(index) {
    let xIsNext = this.state.xIsNext ? false : true
    let atualSymbol = xIsNext ? "X" : "O"
    let trace = this.state.trace
    trace[index] = this.state.symbol
    this.setState({symbol: atualSymbol, xIsNext: xIsNext, log: trace,
      head: "Jogador " + atualSymbol}
    );
    this.winnerVerify();
  }

  render() {
    return (
      <div className="mt-5">
        <h3 className="text-center">{this.state.head}</h3>
        <div className="row">
          <Square game={this} id={0} />
          <Square game={this} id={1} />
          <Square game={this} id={2} />
          <Square game={this} id={3} />
          <Square game={this} id={4} />
          <Square game={this} id={5} />
          <Square game={this} id={6} />
          <Square game={this} id={7} />
          <Square game={this} id={8} />
        </div>
        <h3 className="text-center text-primary">{this.state.notice}</h3>
      </div>
    );
  }
}


