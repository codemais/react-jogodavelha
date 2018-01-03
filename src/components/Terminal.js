import React, { Component } from 'react';
import Info from './Info';

export default class Terminal extends Component {
  constructor() {
    super();
    this.state = this.initialState();
  }

  initialState(text = 'Bem vindo...') {
    return { items: [{ text: text, class: 'current-text' }] };
  }

  reset() {
    this.setState(this.initialState('Partida reiniciada!!!'));
  }

  componentDidMount() {
    this.props.gameSetTerminal(this);
  }

  write(text) {
    let items = this.state.items.map(function(item) {
      item.class = 'old-text';
      return item;
    });
    this.setState({ items: [...items, { text: text, class: 'current-text' }] });
  }

  render() {
    return (
      <div className="terminal">
        {this.state.items.map((item, k) => (
          <Info key={k} text={item.text} class={item.class} />
        ))}
      </div>
    );
  }
}
