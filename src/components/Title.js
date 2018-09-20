// @flow
import React, { Component } from 'react';

import { triggerAnimation } from '../utils/lazyload';

type Props = {
  title: string;
};

class Title extends Component<Props> {
  render() {
    const { title } = this.props;
    return (
      <div className="title trigger-animation trigger-animation__translateY">
        <div className="title__container">
          <div className="col-xs-12 col-sm-8">
            <h3 className="font__title">{title}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
