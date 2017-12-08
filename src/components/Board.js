import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {

  callbackParentAddSquare(square) {
    this.props.callbackParentAddSquare(square)
  }

  callbackParentUpdateGame(index) {
    this.props.callbackParentUpdateGame(index)
  }

  render() {
    return (
      <div className="mx-4">
        <div className="row justify-content-md-center">
          {[0, 1, 2].map((v, k) =>
            <Square key={v} index={v} class={"col-md-4 square"}
              currentSymbol={this.props.currentSymbol}
              isGameOver={this.props.isGameOver}
              callbackParentAddSquare={(square) => this.callbackParentAddSquare(square)}
              callbackParentUpdateGame = {(index) => this.callbackParentUpdateGame(index)} />
            )}
        </div>
        <div className="row justify-content-md-center">
          {[3, 4, 5].map((v, k) =>
            <Square key={v} index={v} class={"col-md-4 square"}
              currentSymbol={this.props.currentSymbol}
              isGameOver={this.props.isGameOver}
              callbackParentAddSquare={(square) => this.callbackParentAddSquare(square)}
              callbackParentUpdateGame = {(index) => this.callbackParentUpdateGame(index)} />
            )}
        </div>
        <div className="row justify-content-md-center">
          {[6, 7, 8].map((v, k) =>
            <Square key={v} index={v} class={"col-md-4 square last-row"}
              currentSymbol={this.props.currentSymbol}
              isGameOver={this.props.isGameOver}
              callbackParentAddSquare={(square) => this.callbackParentAddSquare(square)}
              callbackParentUpdateGame = {(index) => this.callbackParentUpdateGame(index)} />
            )}
        </div>
      </div>
    );
  }
}



