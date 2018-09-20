// @flow
import React, { Component, Fragment } from 'react';

type Props = {
  project: any;
};



class Company extends Component<Props> {

  handleHoverEnter = (evt: SyntheticEvent<any>) => {
    evt.currentTarget.classList.toggle('is-hover');
  }

  handleHoverExit = (evt: SyntheticEvent<any>) => {
    evt.currentTarget.classList.toggle('is-hover');
  }

  render() {
    const { url, subtitle, title, isContact, key } = this.props.project;
    return (
      <li className="project__wrapper">
        <div className="project__container trigger-animation trigger-animation__translateY">
          <a className="project__content" onMouseEnter={this.handleHoverEnter} onMouseLeave={this.handleHoverExit}>
            <div className="project__content__text">
              <div className="project__subtitle font__subtitle trigger-animation trigger-animation__translateY">{subtitle}</div>
              {title &&
                <div className={`project__title font__title ${isContact ? 'is-active': ''}`}>{title}</div>
              }
              {title && !isContact &&
                <div className="project__arrow trigger-animation trigger-animation__translateX">
                  <div className="project__arrow__text font__arrow">View Project</div>
                  <img src="./src/public/assets/images/common/arrow_right.svg" alt="arrow" className="project__arrow__image"/>
                </div>
              }
            </div>
            {key &&
              <div className={`project__background project__background--is-${key}`}></div>
            }
            <div className="project__content__image" style={{ backgroundImage: `url(${url})`}}></div>
          </a>
        </div>
      </li>
    );
  }
}

export default Company;
