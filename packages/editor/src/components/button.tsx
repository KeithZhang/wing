import React, { Component } from 'react';
import IButtonProps from './button.d';

export default class Button extends Component<IButtonProps> {
  static defaultProps = {
    backgroundColor: 'green'
  };

  render() {
    return (
      <div style={{ backgroundColor: this.props.backgroundColor }}>
        {this.props.children}
      </div>
    );
  }
}
