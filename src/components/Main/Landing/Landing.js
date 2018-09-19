// @flow
import React, { Component, Fragment } from 'react';

import Background from './Background';
import Content from './Content';

type Props = {};

class Landing extends Component<Props> {

  componentDidMount() {
    console.log('landing mounted');
  }

  render() {
    return (
      <section className="landing ratio-1-1">
        <div className="landing__background">
          <Background/>
        </div>
        <div className="landing__content">          
          <Content/>
        </div>
      </section>
    );
  }
}

export default Landing;
