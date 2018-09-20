// @flow
import React, { Component } from 'react';

type Props = {
  title: string;
};

const Title = ({title}: Props) =>  (
  <div className="title trigger-animation trigger-animation__translateY translateY--150">
    <div className="title__container">
      <div className="col-xs-12 col-sm-8">
        <h3 className="font__title">{title}</h3>
      </div>
    </div>
  </div>
);


export default Title;
