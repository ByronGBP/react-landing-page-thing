// @flow
import React, { Component } from 'react';

type Props = {
  onLoad: () => void;
};

class Loader extends Component<Props> {
  
  loaderElement: ?HTMLDivElement;

  componentDidMount() {
    setTimeout(() => {
      //TODO:- refactor this. Too weak.
      if (!this.loaderElement) {
        return;
      }
      this.loaderElement.classList.add('loader--hidden');
      this.props.onLoad();
    }, 2000);
  }
  
  render() {
    return (
      <div className="loader" ref={elem => this.loaderElement = elem}>
        <div className="loader__container">
          <div className="loader__item"></div>
        </div>
      </div>
    );
  }
}

export default Loader;
