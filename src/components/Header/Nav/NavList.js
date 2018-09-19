// @flow
import React, { Component } from 'react';

type Props = {}

class NavList extends Component<Props> {

  navItemsElements: ?NodeList<HTMLElement>;

  componentDidMount() {
    this.setupEventHandle();
  }

  handleClick = (evt: SyntheticEvent<HTMLElement>) => {
    //Idea:- When the user clicks a navItem it will highlight or unhighlight
    const currentElement = evt.currentTarget;
    currentElement.classList.toggle('active');
    if (!this.navItemsElements) {
      return;
    }
    let patch = 0; // To track if all or none are active <- Refactor!
    this.navItemsElements.forEach((elem: HTMLElement) => {
      if (elem !== currentElement && elem.classList.contains('active')){
        elem.classList.remove('active');
        patch += 1;
      }
    });
    //TODO:- Refactor
    if (patch === 3) { // <-- all active
      currentElement.classList.toggle('active');
    } else if (patch === 0) { // <-- none active
      //$FlowFixMe
      this.navItemsElements.forEach((elem: HTMLElement) => {
        elem.classList.add('active');
      });
    }
  }

  setupEventHandle() {
    this.navItemsElements = document.querySelectorAll('.nav-list__item');
  }

  render() {
    return (
      <nav className="nav-list">
        <ul className="nav-list__container">
          <li className="nav-list__item active" onClick={this.handleClick}> <a> Projects</a></li>
          <li className="nav-list__item active" onClick={this.handleClick}> <a> About</a></li>
          <li className="nav-list__item active" onClick={this.handleClick}> <a> Content</a></li>
          <li className="nav-list__item active" onClick={this.handleClick}> <a> Es</a></li>
        </ul>
      </nav>
    );
  }
}
export default NavList;
