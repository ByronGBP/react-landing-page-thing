// @flow
import React, { Component } from 'react';

type Props = {
  onClick: () => void;
}

class Burger extends Component<Props> {

  burgerLinesElements: ?NodeList<HTMLElement>;

  componentDidMount() {
    this.setupEventHandle();
  }

  handleClick = () => {
    if (!this.burgerLinesElements) {
      return;
    }
    this.burgerLinesElements.forEach((elem: HTMLElement) => {
      elem.classList.toggle('burger__line--collapse');
    });

    this.props.onClick();
  }

  setupEventHandle() {
    this.burgerLinesElements = document.querySelectorAll('.burger__line');
  }

  render() {
    return (
      <div className="burger__container" onClick={this.handleClick}>
        <div className="burger__line burger__line--top"></div>
        <div className="burger__line burger__line--middle"></div>
        <div className="burger__line burger__line--bottom"></div>
      </div>
    );
  }
}
export default Burger;
