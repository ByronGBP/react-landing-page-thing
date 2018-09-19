// @flow
import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

type Props = {
  onReady: () => void;
  isLoaded: boolean;
};

class Home extends Component<Props> {

  componentDidMount() {
    // simulate an asynchronous call
    setTimeout(() => {
      this.props.onReady();
    }, 2000);
  }

  render() {
    const { isLoaded } = this.props;
    return (
      <Fragment>
        <div className="main-container">
          <Header />
          <div>
            <Main isLoaded={ isLoaded }/>
          </div>
          <Footer />
        </div>
        <a className="link--legal"> Legal Notice</a>
      </Fragment>
    );
  }
}

export default Home;
