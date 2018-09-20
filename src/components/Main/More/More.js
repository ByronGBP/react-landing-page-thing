// @flow
import React, { Component } from 'react';

import Arrow from './Arrow';

const handleHoverEnter = () => {
  //$FlowFixMe
  document.body.classList.toggle('is-second-color');
};

const handleHoverExit = () => {
  //$FlowFixMe
  document.body.classList.toggle('is-second-color');
};

//TODO:- isolate svg
const More = () => (
  <section className="more">
    <div className="more__wrapper">
      <div className="more__container">
        <a className="more__item trigger-animation trigger-animation__translateY translateY--150" onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
          <p className="more__text font__more">
                More projects
            <span className="more__arrow">
              <Arrow/>
            </span>
          </p>
        </a>
      </div>
    </div>
  </section>
);

export default More;