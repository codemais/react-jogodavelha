import React, { Component } from 'react';

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState() {
    return {
      symbol: '',
      disabled: false,
      color: '#ffffff',
      index: this.props.index
    };
  }

  componentDidMount() {
    this.props.boardAddSquare(this);
  }

  disable(){
    this.setState({ disabled: true });
  }

  paint(){
    this.setState({ color: '#3ADF00' });
  }

  reset() {
    this.setState(this.initialState());
  }

  handleClick() {
    let { currentSymbol } = this.props;
    let { disabled } = this.state;
    if ( !disabled ) {
      this.setState({ symbol: currentSymbol, disabled: true }, function() {
        this.props.boardActionNotify(this.props.index);
      });
    }
  }

  render() {
    return (
      <div className={this.props.class}
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick.bind(this)} >
        <h1>{this.state.symbol}</h1>
      </div>
    );
  }
}
