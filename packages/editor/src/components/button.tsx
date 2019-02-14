import React, { Component } from 'react';
import IButtonProps from './button.d';
import ReactDOM from 'react-dom';

export default class Button extends Component<IButtonProps> {
  static defaultProps = {
    backgroundColor: 'yellow'
  };

  componentDidMount() {
    var rectElement = ReactDOM.findDOMNode(this) as Element;

    // console.log('client scrollLeft...', rectElement.scrollLeft);
    // console.log('client clientLeft...', rectElement.clientLeft);
    // console.log('client clientHeight...', rectElement.clientHeight);
    // console.log('client clientTop...', rectElement.clientTop);
    // console.log('client clientWidth...', rectElement.clientWidth);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.backgroundColor,
          marginLeft: 101,
          paddingLeft: 20,
          height: 50
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
