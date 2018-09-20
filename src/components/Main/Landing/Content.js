// @flow
import React, { Component, Fragment } from 'react';

import Background from './Background';

import { triggerAnimation } from '../../../utils/lazyload';

type Props = {};

class Content extends Component<Props> {

  componentDidMount() {
    setTimeout(() => {
      triggerAnimation();
    }, 20);
  }

  render() {
    return (
      <div className="content">
        <div className="content__body__wrapper">
          <div className="content__container">
            <div className="content__item trigger-animation trigger-animation__translateY">
              <h1 className="font__subtitle"><p>DIGITAL YOU</p></h1>
              <h3 className="font__title col-sm-8"><p>Digital experiences with results</p></h3>
            </div>
          </div>
        </div>
        <div className="content__footer__wrapper">
          <div className="content__container">
            <div className="content__item is-active xs-12">
              <div className="mouse-scroll-animation">
                <div className="mouse-scroll-animation__container">
                  <div className="mouse-scroll-animation__item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
