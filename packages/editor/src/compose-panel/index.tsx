import React, { Component } from 'react';
import './index.css';
import { ipcRenderer } from 'electron';

import Button from '../components/button';
import Frame from '../components/frame';

interface ChildrenType {
  type: Symbol;
  value: any;
  props: {
    children?: Array<ChildrenType>;
  };
}

const SYMBOL_REACT_COMPONENT = Symbol.for('react-component');
const SYMBOL_PLAIN_TEXT = Symbol.for('plain-text');
const SYMBOL_HTML_TAG = Symbol.for('html-tag');

export default class ComposePanel extends Component {
  composePanelContainerRef: any;
  containerRef: any;

  state = {
    configData: {
      props: {
        children: [
          {
            type: SYMBOL_REACT_COMPONENT,
            value: Frame,
            props: {
              children: [
                {
                  type: SYMBOL_PLAIN_TEXT,
                  value: 'first'
                },
                {
                  type: SYMBOL_REACT_COMPONENT,
                  value: Button,
                  props: {
                    backgroundColor: 'yellow',
                    children: [
                      {
                        type: SYMBOL_PLAIN_TEXT,
                        value: 'first button'
                      }
                    ]
                  }
                },
                {
                  type: SYMBOL_HTML_TAG,
                  value: 'div',
                  props: {
                    style: {
                      backgroundColor: 'red',
                      height: '2px'
                    }
                  }
                },
                {
                  type: SYMBOL_PLAIN_TEXT,
                  value: 'second'
                },
                {
                  type: SYMBOL_REACT_COMPONENT,
                  value: Button,
                  props: {
                    backgroundColor: 'green',
                    children: [
                      {
                        type: SYMBOL_PLAIN_TEXT,
                        value: 'second button'
                      },
                      {
                        type: SYMBOL_REACT_COMPONENT,
                        value: Button,
                        props: {
                          backgroundColor: 'green',
                          children: [
                            {
                              type: SYMBOL_PLAIN_TEXT,
                              value: 'third button'
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  };

  componentDidMount() {
    console.log('composePanelContainerRef..', this.composePanelContainerRef);
  }

  render() {
    const { configData } = this.state;
    let children = this.transform(configData.props.children as any);

    return (
      <ComposePanelContainer ref={ref => (this.composePanelContainerRef = ref)}>
        {children}
      </ComposePanelContainer>
    );
    // return (
    //   <ComposePanelContainer ref={ref => (this.composePanelContainerRef = ref)}>
    //     <Container>
    //       first
    //       <Button>first button</Button>
    //       <div
    //         style={{
    //           backgroundColor: 'red',
    //           height: '2px'
    //         }}
    //       />
    //       second
    //       <Button>
    //         second button
    //         <Button>third button</Button>
    //       </Button>
    //     </Container>
    //   </ComposePanelContainer>
    // );
  }

  transform = (children: Array<ChildrenType>) => {
    if (!children || children.length < 0) {
      return null;
    }

    return children.map((v: ChildrenType) => {
      if (SYMBOL_REACT_COMPONENT === v.type) {
        if (v.props.children) {
          return React.createElement(
            v.value,
            { ...v.props, ...{ key: Math.random() } },
            this.transform(v.props.children)
          );
        } else {
          return React.createElement(
            v.value,
            { ...v.props, ...{ key: Math.random() } },
            null
          );
        }
      }
      if (SYMBOL_PLAIN_TEXT === v.type) {
        return v.value;
      }

      if (SYMBOL_HTML_TAG === v.type) {
        if (v.props.children) {
          return React.createElement(
            v.value,
            { ...v.props, ...{ key: Math.random() } },
            this.transform(v.props.children)
          );
        } else {
          return React.createElement(v.value, {
            ...v.props,
            ...{ key: Math.random() }
          });
        }
      }
    });
  };
}

class ComposePanelContainer extends Component {
  state = {
    name: 'keith1'
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          border: '1px solid #ffbd20',
          flexDirection: 'column',
          flex: 2
        }}
        onClick={e => {
          console.log('pageX..', e.pageX);
          console.log('pageY..', e.pageY);
          console.log('clientX..', e.clientX);
          console.log('clientY..', e.clientY);
          console.log('screenX..', e.screenX);
          console.log('screenY..', e.screenY);
          console.log('====>');
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
