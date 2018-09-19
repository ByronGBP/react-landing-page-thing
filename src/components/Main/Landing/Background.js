// @flow
import React, { Component, Fragment } from 'react';

import { lazyLoad } from '../../../utils/lazyload';

type Props = {};

class Landing extends Component<Props> {

  backgroundImageElement: ?HTMLElement;
  currentYOffset: number = 0;
  currentYPosition: number = 0;

  intervalId: IntervalID;
  currentImageIndex: number = 1;

  handleScroll = () => {
    if (!this.backgroundImageElement) {
      return;
    }
    //TODO:- isolate the parallax logic
    const element = this.backgroundImageElement;
    const pageYOffset = window.pageYOffset;
    if (pageYOffset > this.currentYOffset && this.currentYPosition > -10) {
      this.currentYPosition -= 0.15;
    } else if (pageYOffset < this.currentYOffset && this.currentYPosition < 0) {
      this.currentYPosition += 0.15;
    }
    element.style.backgroundPositionY = this.currentYPosition + 'px';

    this.currentYOffset = pageYOffset;
  }

  swapBackground = () => {
    //Little sht pretending to be a carousel
    if (!this.backgroundImageElement) {
      return;
    }
    this.backgroundImageElement.classList.toggle('ready-2');
  }

  componentDidMount() {
    this.setupLazyLoads();
    this.setupEventHandlers();
    this.setupCarousel();
  }

  setupLazyLoads() {
    lazyLoad();
    setTimeout(() => {
      if (this.backgroundImageElement) {
        //Little hack: For some reason transition doesn't work if there is not a minimun delay
        //TODO:- find out why!
        this.backgroundImageElement.classList.add('is-active');
      }
    }, 1000);
  }

  setupEventHandlers() {
    document.addEventListener('scroll', this.handleScroll);
  }

  setupCarousel() {
    //TODO:- stop doing sht!
    this.intervalId = setInterval(this.swapBackground, 5000);
  }

  render() {
    return (
      <div className="background">
        <div className="background__image lazy-bg" ref={elem => this.backgroundImageElement = elem}></div>
        <div className="background__gradient"></div>
      </div>
    );
  }
}

export default Landing;
