// @flow
import React, { Component, Fragment } from 'react';

import Landing from './Landing';
import Companies from './Companies';
import Projects from './Projects';
import More from './More';

type Props = {
  isLoaded: boolean;
};

const Main = ({ isLoaded }: Props) => (
  <main id="main">
    { isLoaded &&     
      <Fragment>
        <Landing/>
        <Companies />
        <Projects />
        <More />
      </Fragment>    
    }
  </main>
);

export default Main;
