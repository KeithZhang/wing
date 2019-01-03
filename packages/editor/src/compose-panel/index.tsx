import React, { Component } from 'react';
import './index.css';

import Button from '../components/button';

export default class ComposePanel extends Component {
  composePanelContainerRef: any;

  state = {
    json: {
      name: 'Button'
    }
  };

  componentDidMount() {
    console.log('composePanelContainerRef..', this.composePanelContainerRef);
  }

  render() {
    let btn = React.createElement(
      Button,
      {
        backgroundColor: 'blue'
      },
      'hello button'
    );

    return (
      <ComposePanelContainer
        ref={ref => {
          this.composePanelContainerRef = ref;
        }}
      >
        this is compose panel
        <div className="hr" />
        <Button>hello</Button>
      </ComposePanelContainer>
    );
  }
}

const ComposePanelContainer = React.forwardRef((props, ref: any) => {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        border: '1px solid #ffbd20',
        flexDirection: 'column',
        flex: 2
      }}
    >
      {props.children}
    </div>
  );
});
