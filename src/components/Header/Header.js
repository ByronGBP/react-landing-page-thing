// @flow
import React, { Component } from 'react';

import Logo from './Logo/Logo';
import Burger from './Nav/Burger';
import NavList from './Nav/NavList';
import Sidebar from './Nav/Sidebar';

type Props = {
}

type State = {
  isBurgerClicked: boolean;
}

class Header extends Component<Props, State> {

  state = { isBurgerClicked: false };

  headerElement: ?HTMLElement;
  currentYOffset: number = 0;

  handleScroll = () => {
    // Idea:- 
    // If the header is top -> with no background
    // If the header is no-top:
    //  If it is dropping -> no header
    //  If it is lifting -> header with background
    if (!this.headerElement) {
      return;
    }

    const classList = this.headerElement.classList;
    const pageYOffset = window.pageYOffset;

    if(pageYOffset > 30) {
      classList.add('header--is-not-top');
      classList.remove('header--is-top');

      if (pageYOffset > this.currentYOffset) {
        classList.remove('header--is-pinned');
      } else {
        classList.add('header--is-pinned');
      }

    } else {
      classList.add('header--is-top');
      classList.remove('header--is-not-top');
      classList.remove('header--is-pinned');
    }
    this.currentYOffset = pageYOffset;
  }

  handleBurgerClick = () => {
    //TODO:- find new method for this
    //$FlowFixMe
    document.body.classList.toggle('is-overflow-locked');
    //$FlowFixMe
    document.querySelector('#footer').classList.toggle('is-hidden');

    const { isBurgerClicked } = this.state;
    this.setState({ isBurgerClicked: !isBurgerClicked } );
  };

  componentDidMount() {
    this.setupEventHandle();
  }

  setupEventHandle() {
    document.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const { isBurgerClicked } = this.state;

    return (
      <header ref={(elem) => this.headerElement = elem} id="header">
        <div className="header__container">
          <div className="header__nav">
            <Burger onClick={this.handleBurgerClick}/>
            <Sidebar isDisplay={isBurgerClicked}/>
            <NavList/>
          </div>
          <div className="header__logo">
            <Logo/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
