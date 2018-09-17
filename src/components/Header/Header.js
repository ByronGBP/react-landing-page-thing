// @flow
import React, { Component } from 'react';

import Burger from './Burger';
import Logo from './Logo';
import Sidebar from './Sidebar';

type Props = {}

class Header extends Component<Props> {

  headerElement: ?HTMLElement;
  sidebarElement: ?HTMLDivElement;

  currentYOffset: number = 0;

  handleScroll = () => {
    if (!this.headerElement) {
      return;
    }

    const classList = this.headerElement.classList;
    const pageYOffset = window.pageYOffset;
    if(pageYOffset > 30) {
      if (pageYOffset > this.currentYOffset) {
        classList.add('header--no-top');
        classList.remove('header--pinned');
      } else {
        classList.add('header--pinned');
      }
      classList.remove('header--top');

    } else {
      classList.add('header--top');
      classList.remove('header--no-top');
      classList.remove('header--pinned');
    }
    this.currentYOffset = pageYOffset;
  }

  handleBurgerClick = () => {
    if (!this.sidebarElement) {
      return;
    }
    this.sidebarElement.classList.toggle('sidebar--display');
    //TODO:- find new method for this both
    //$FlowFixMe
    document.body.classList.toggle('is-overflow-locked');
    //$FlowFixMe
    document.querySelector('#footer').classList.toggle('is-hidden');
  }

  componentDidMount() {
    this.setupEventHandle();
  }

  setupEventHandle() {
    document.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <header ref={(elem) => this.headerElement = elem} id="header" className="">
        <div className="header__container">
          <div className="header__burger"><Burger onClick={this.handleBurgerClick}/></div>
          <div className="header__logo"><Logo/></div>
          <div className="header__sidebar" ref={elem => this.sidebarElement = elem}><Sidebar/></div>
        </div>
      </header>
    );
  }
}

export default Header;
