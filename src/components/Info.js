import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <p className={this.props.class}>
        > {this.props.text}
      </p>
    );
  }

}



