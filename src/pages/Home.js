// @flow
import React, { Component, Fragment } from 'react';

import Featured from '../components/Featured/Featured';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Landing from '../components/Landing/Landing';
import MoreProjects from '../components/MoreProjects/MoreProjects';
import WorkWith from '../components/WorkWith/WorkWith';

type Props = {
};

class Home extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
        <Landing />
        <WorkWith />
        <Featured />
        <MoreProjects />
      </Fragment>
    );
  }
}

export default Home;
