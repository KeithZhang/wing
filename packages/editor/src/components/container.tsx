import React, { Component } from 'react';

export default class Container extends Component {
  state = {
    name: 'keith'
  };

  componentWillMount() {
    console.log('hello');
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          border: '1px solid #ffbd20',
          flexDirection: 'column',
          flex: 1
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
