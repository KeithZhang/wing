import React, { Component } from 'react';
import { render } from 'react-dom';

import Layout from './components/layout';
import ComponentsPanel from './components-panel/index';
import ComposePanel from './compose-panel/index';
import PropsPanel from './props-panel/index';

class ButtonContainer extends Component {
  render() {
    return <div style={{ backgroundColor: 'red' }}>{this.props.children}</div>;
  }
}

class Root extends Component {
  rootRef: any;

  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.rootRef);
  }

  render() {
    return (
      <Layout ref={this.rootRef}>
        <ComponentsPanel />
        <ComposePanel />
        <PropsPanel />
      </Layout>
    );
  }
}

render(<Root />, document.getElementById('root'));
