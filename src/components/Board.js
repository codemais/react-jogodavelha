import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.squares = [];
  }

  componentDidMount() {
    this.props.gameSetBoard(this);
  }

  addSquare(square) {
    this.squares.push(square);
  }

  actionNotify(index) {
    if (this.checkRules()) {
      this.props.gameWinnerNotify();
    } else {
      this.props.gameActionNotify(index);
    }
  }

  checkRules() {
    const rules = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6] // diagonais
    ];
    let check
    let { currentSymbol } = this.props;

    rules.forEach(rule => {
      let filteredSquares = this.squares.filter(function (square) {
        return (rule.includes(square.state.index) && square.state.symbol === currentSymbol)
      });

      if (filteredSquares.length === 3) {
        this.squares.forEach(square => {
          square.disable();
        });

        filteredSquares.forEach(square => {
          square.paint();
        });

        check = true;
      }
    });

    return check;
  }

  reset(){
    this.squares.forEach(square => {
      square.reset();
    });
  }

  disableSquares(){
    this.squares.forEach(square => {
      square.disable();
    });
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          {[0, 1, 2].map((v, k) => (
            <Square
              key={v}
              index={v}
              class={'col-md-4 square'}
              currentSymbol={this.props.currentSymbol}
              isGameOver={this.props.isGameOver}
              boardAddSquare={ square => this.addSquare(square) }
              boardActionNotify={index =>
                this.actionNotify(index)
              }
            />
          ))}
        </div>
        <div className="row">
          {[3, 4, 5].map((v, k) => (
            <Square
              key={v}
              index={v}
              class={'col-md-4 square'}
              currentSymbol={this.props.currentSymbol}
              isGameOver={this.props.isGameOver}
              boardAddSquare={ square => this.addSquare(square) }
              boardActionNotify={index =>
                this.actionNotify(index)
              }
            />
          ))}
        </div>
        <div className="row">
          {[6, 7, 8].map((v, k) => (
            <Square
              key={v}
              index={v}
              class={'col-md-4 square last-row'}
              currentSymbol={this.props.currentSymbol}
              isGameOver={this.props.isGameOver}
              boardAddSquare={ square => this.addSquare(square) }
              boardActionNotify={index =>
                this.actionNotify(index)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}
