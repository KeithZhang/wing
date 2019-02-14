import React, { Component } from 'react';

export default class List extends Component<any, any> {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div className="layout">
          <h3>layout:</h3>
          <div className="layout-column">Frame</div>
        </div>
        <div className="custome">
          <h3>custome components:</h3>
          <div className="custome-column">Button</div>
        </div>
      </div>
    );
  }
}
