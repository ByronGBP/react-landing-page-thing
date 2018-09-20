// @flow
import React, { Component } from 'react';

type Props = {
  companyUrl: string;
};

const Company = ({ companyUrl }: Props) => (
  <div className="company__item col-xs-6 col-sm-4 col-md-3">
    <div className="company__image">
      <div className="image__logo trigger-animation trigger-animation__translateY translateY-100 lazy-bg" data-src={`url(${companyUrl})`} >
      </div>
    </div>
  </div>
);

export default Company;