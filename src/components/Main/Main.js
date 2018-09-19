// @flow
import React, { Component, Fragment } from 'react';

import Landing from './Landing';
import WorkWith from './WorkWith/WorkWith';
import Featured from './Featured/Featured';
import MoreProjects from './MoreProjects/MoreProjects';
import { timingSafeEqual } from 'crypto';

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
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
          <WorkWith />
          <Featured />
          <MoreProjects />
        </Fragment>    

        }
      </main>
    );
  }
}

export default Main;
