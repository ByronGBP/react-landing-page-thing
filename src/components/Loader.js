// @flow
import React, { Component } from 'react';

type Props = {
  isLoaded: boolean
};

const Loader =  ({isLoaded}: Props) => (
  <div className={`loader ${isLoaded ? "is-hidden": ""}`}>
    <div className="loader__container">
      <div className="loader__item"></div>
    </div>
  </div>
);

export default Loader;
