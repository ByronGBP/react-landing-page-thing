// @flow
import React, { Component } from 'react';

import Company from './Company';
import Title from '../../Title';

type Props = {
};

//TODO:- Refactor
const companies = [
  'https://you.digital/system/clients/images/clients_82_original.svg?1533798789',
  'https://you.digital/system/clients/images/clients_83_original.svg?1533798797',
  'https://you.digital/system/clients/images/clients_74_original.svg?1522146294',
  'https://you.digital/system/clients/images/clients_62_original.svg?1522146294',
  'https://you.digital/system/clients/images/clients_73_original.svg?1522146294',
  'https://you.digital/system/clients/images/clients_58_original.svg?1522146294',
  'https://you.digital/system/clients/images/clients_64_original.svg?1522146294',
  'https://you.digital/system/clients/images/clients_60_original.svg?1522146294',
];

const Companies = () =>  (
  <section className="companies">
    <Title title="We work with"/>
    <div className="companies__container">
      <div className="company__container">
        { companies.map((company: string, idx: number) => {
          return <Company key={idx} companyUrl={company}/>;
        })}
      </div>
    </div>
  </section>
);


export default Companies;
