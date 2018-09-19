// @flow
import React, { Component } from 'react';

type Props = {
  onClick: () => void;
}

class Burger extends Component<Props> {

  burgerLinesElements: ?NodeList<HTMLElement>;

  componentDidMount() {
    this.setupElements();
  }

  handleClick = () => {
    if (!this.burgerLinesElements) {
      return;
    }
    this.burgerLinesElements.forEach((elem: HTMLElement) => {
      elem.classList.toggle('burger__line--is-collapse');
    });

    this.props.onClick();
  }

  setupElements() {
    this.burgerLinesElements = document.querySelectorAll('.burger__line');
  }

  render() {
    return (
      <div className="burger">
        <div className="burger__container">
          <div className="burger__wrapper" onClick={this.handleClick}>
            <div className="burger__line burger__line--is-top"></div>
            <div className="burger__line burger__line--is-middle"></div>
            <div className="burger__line burger__line--is-bottom"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Burger;
