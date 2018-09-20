// @flow
import React, { Component, Fragment } from 'react';

import Background from './Background';
import Content from './Content';

const Landing = () => (
  <section className="landing ratio-1-1">
    <div className="landing__background">
      <Background/>
    </div>
    <div className="landing__content">          
      <Content/>
    </div>
  </section>
);

export default Landing;
