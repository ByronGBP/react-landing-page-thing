// @flow
import React, { Component, Fragment } from 'react';

import Home from './Home';
import Loader from '../components/Loader';

type Props = {
};

type State = {
  isLoaded: boolean;
}

class Root extends Component<Props, State> {

  state = { isLoaded: false};

  handleReady = () => {
    this.setState({ isLoaded: true });
  }

  render() {
    // Idea:- Any component will say when it is ready so the `Loader` can disappear
    // A state management like redux would be usefull here
    // It will be simulated with an event-based communication 
    const { isLoaded } = this.state;
    return (
      <Fragment>
        <Loader isLoaded={isLoaded}/>
        <Home onReady={this.handleReady} isLoaded={isLoaded}/>
      </Fragment>
    );
  }
}

export default Root;
