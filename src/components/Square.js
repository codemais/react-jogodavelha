import React, { Component } from 'react';

export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState() {
    return { symbol: "", clicked: false, color: '#ffffff' }
  }

  componentDidMount() {
    this.callbackParentAddSquare(this)
  }

  reset() {
    this.setState(this.initialState());
  }

  callbackParentAddSquare(square) {
    this.props.callbackParentAddSquare(square)
  }

  callbackParentUpdateGame(index) {
    this.props.callbackParentUpdateGame(index)
  }

  handleClick() {
    let { isGameOver, currentSymbol} = this.props
    if (!this.state.clicked && !isGameOver) {
      this.setState({symbol: currentSymbol, clicked: true}, function(){
        this.callbackParentUpdateGame(this.props.index)
      })
    }
  }

  render() {
    return (
      <div
        className={this.props.class}
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick.bind(this)}>
        <h1>{this.state.symbol}</h1>
      </div>
    );
  }
}