import React, { Component } from 'react';
import './../bootstrap.css';

export default class Square extends Component {

  constructor() {
    super();
    this.state = {symbol: "", clicked: false};
  }

  handleClick(){
    if (!this.state.clicked && !this.props.game.state.finished) {
      this.props.game.update(this.props.id)
      let symbol = this.props.game.state.symbol;
      this.setState({symbol: symbol, clicked: true});
    }
  }

  render() {
    return (
      <div className="col-md-4 border border-primary" id={this.props.id}
        onClick={this.handleClick.bind(this)}
        style={{ minHeight: '100px', display: 'flex', justifyContent: 'center',
          alignItems: 'center'}}>
        <h3>{this.state.symbol}</h3>
      </div>
    );
  }
}