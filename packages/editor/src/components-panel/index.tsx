import React, { Component } from 'react';

import './index.css';
import List from './list';
import Tree from './tree';

export default class ComponentsPanel extends Component {
  render() {
    return (
      <div className="components-panel-container">
        <List />
        <Tree />
      </div>
    );
  }
}
