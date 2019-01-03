import React, { Component } from 'react';

import './layout.css';
export default class Layout extends Component {
  render() {
    return <div className="layout-container">{this.props.children}</div>;
  }
}
