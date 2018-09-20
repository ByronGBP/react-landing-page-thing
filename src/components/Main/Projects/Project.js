// @flow
import React, { Component, Fragment } from 'react';

type Props = {
  project: any;
};

class Company extends Component<Props> {

  render() {
    const { url, subtitle, title, isContact } = this.props.project;
    return (
      <li className="project__wrapper">
        <div className="project__container trigger-animation trigger-animation__translateY">
          <a className="project__content">
            <div className="project__content__text">
              <div className="project__subtitle font__subtitle">{subtitle}</div>
              {title &&
                <div className="project__title font__title">{title}</div>
              }
              {title && !isContact &&
                <div className="project__arrow">
                  <div className="project__arrow__text font__arrow">View Project</div>
                  <img src="./src/public/assets/images/common/arrow_right.svg" alt="arrow" className="project__arrow__image"/>
                </div>
              }
            </div>
            <div className="project__content__image" style={{ backgroundImage: `url(${url})`}}></div>
          </a>
        </div>
      </li>
    );
  }
}

export default Company;
