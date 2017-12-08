import React, { Component } from 'react';

export default class Panel extends Component {
  constructor() {
    super();
    this.state = { selectedOption: 'X' };
  }

  onChange(e) {
    this.setState({ selectedOption: e.target.value });
  }

  onClick(e) {
    this.props.callbackParentResetGame(this.state.selectedOption);
  }

  render() {
    return (
      <div className="">
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              id="btnRadios1"
              value="X"
              checked={this.state.selectedOption === 'X'}
              onChange={this.onChange.bind(this)}
            />
            Primeiro Jogador X
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="radio"
              id="btnRadios2"
              value="O"
              checked={this.state.selectedOption === 'O'}
              onChange={this.onChange.bind(this)}
            />
            Primeiro Jogador O
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClick.bind(this)}
        >
          Reiniciar partida
        </button>
      </div>
    );
  }
}
