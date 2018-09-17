// @flow
import React, { Component } from 'react';

type Props = {}

class Nav extends Component<Props> {

  navItemsElements: ?NodeList<HTMLElement>;

  componentDidMount() {
    this.setupEventHandle();
  }

  handleClick = (evt: SyntheticEvent<HTMLElement>) => {
    const currentElement = evt.currentTarget;
    currentElement.classList.toggle('active');
    let patch = 0; // For the first time user clicks
    if (!this.navItemsElements) {
      return;
    }
    this.navItemsElements.forEach((elem: HTMLElement) => {
      if (elem !== currentElement && elem.classList.contains('active')){
        elem.classList.remove('active');
        patch += 1;
      }
    });
    //TODO:- refactor
    if (patch === 3) {
      currentElement.classList.toggle('active');
    }
  }

  setupEventHandle() {
    this.navItemsElements = document.querySelectorAll('.nav__item');
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav__container">
          <li className="nav__item active" onClick={this.handleClick}> <a> Projects</a></li>
          <li className="nav__item active" onClick={this.handleClick}> <a> About</a></li>
          <li className="nav__item active" onClick={this.handleClick}> <a> Content</a></li>
          <li className="nav__item active" onClick={this.handleClick}> <a> Es</a></li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
