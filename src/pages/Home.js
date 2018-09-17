// @flow
import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

type Props = {
};

class Home extends Component<Props> {
  render() {
    return (
      <Fragment>
        <Header/>
        <Footer/>
        <Main/>
      </Fragment>
    );
  }
}

export default Home;
