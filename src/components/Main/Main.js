// @flow
import React, { Component, Fragment } from 'react';

import Loader from './Loader';
import Landing from './Landing';
import WorkWith from './WorkWith/WorkWith';
import Featured from './Featured/Featured';
import MoreProjects from './MoreProjects/MoreProjects';
import { timingSafeEqual } from 'crypto';

type Props = {
};

class Main extends Component<Props> {

  hackValue: string = '';

  //TODO:- get rid of this hack
  handleLoad = () => {
    // Little hack to communicate with a sibling -> Landing
    this.hackValue = 'loaded';
    this.forceUpdate();
  }

  render() {
    return (
      <main id="main">
        <Loader onLoad={this.handleLoad} />
        <Landing hack={this.hackValue}/>
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
      </main>
    );
  }
}

export default Main;
