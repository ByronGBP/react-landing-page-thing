// @flow
import React, { Component } from 'react';

import Title from '../../Title';
import Project from './Project';

//TODO:- Refactor
const companies = [
  {
    url: 'https://you.digital/system/projects/thumbs/projects_1_small_1.jpg?1522146371', 
    subtitle: 'Massimo Dutti E-commerce',
    title: 'Their premium shopping experience into the digital world',
    key: 'first'
  },
  {
    url: './src/public/assets/images/highlighted/highlighted_02.svg', 
    subtitle: 'We are awarded!',
  },
  {
    url: './src/public/assets/images/highlighted/highlighted_03.jpg', 
    subtitle: 'New product!',},
  {
    url: 'https://you.digital/system/projects/thumbs/projects_5_small_1.jpg?1522146380', 
    subtitle: 'Mandarin Oriental',
    title: 'Hotel customers sneak into the kitchen',
    key: 'second'
  },
  {
    url: 'https://you.digital/system/projects/thumbs/projects_14_small_2.jpg?1522146431', 
    subtitle: 'Aoo Barcelona',
    title: 'Their premium experience shopping online',
    key: 'third'
  },
  {
    url: './src/public/assets/images/highlighted/highlighted_06.jpg', 
    subtitle: 'We are looking for you',
    title: 'Join the team',
    isContact: true },
];

const Projects = () => (
  <section className="featured">
    <Title title="Featured"/>
    <div className="projects">
      <div className="projects__container">
        <div className="col-sm-12">
          <ul className="projects__table">
            {companies.map((elem, idx) => {
              return <Project key={idx} project={elem} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
