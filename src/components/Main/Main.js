// @flow
import React, { Component, Fragment } from 'react';

import Landing from './Landing';
import Companies from './Companies';
import Projects from './Projects';
import MoreProjects from './MoreProjects/MoreProjects';

type Props = {
  isLoaded: boolean;
};

class Main extends Component<Props> {

  render() {
    const { isLoaded } = this.props;
    return (
      <main id="main">
        { isLoaded &&     
        <Fragment>
          <Landing/>
          <Companies />
          <Projects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
          <MoreProjects />
        </Fragment>    

        }
      </main>
    );
  }
}

export default Main;
