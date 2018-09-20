// @flow
import React, { Component, Fragment } from 'react';

import { lazyLoad } from '../../../utils/lazyload';

type Props = {};

const images = [
  'https://you.digital/system/home_images/images/home_images_62_original.jpg?1522146353',
  'https://you.digital/system/home_images/images/home_images_63_original.jpg?1522146356',
  'https://you.digital/system/home_images/images/home_images_64_original.jpg?1522146358',
  'https://you.digital/system/home_images/images/home_images_59_original.jpg?1522146360',
  'https://you.digital/system/home_images/images/home_images_58_original.jpg?1522146365',
  'https://you.digital/system/home_images/images/home_images_61_original.jpg?1522146351'
];

class Background extends Component<Props> {

  backgroundImageElement: ?HTMLElement;
  currentYOffset: number = 0;
  currentYPosition: number = 0;
  
  intervalId: IntervalID;
  backgroundImageElements: ?NodeList<HTMLElement>;
  currentImageIndex: number = 0;

  handleScroll = () => {
    if (!this.backgroundImageElement) {
      return;
    }
    //TODO:- isolate the parallax logic
    const element = this.backgroundImageElement;
    const pageYOffset = window.pageYOffset;
    if (pageYOffset > this.currentYOffset && this.currentYPosition > -15) {
      this.currentYPosition -= 0.25;
    } else if (pageYOffset < this.currentYOffset && this.currentYPosition < 0) {
      this.currentYPosition += 0.25;
    }
    element.style.backgroundPositionY = this.currentYPosition + 'px';

    this.currentYOffset = pageYOffset;
  }

  carouselAction = () => {
    //Little sht pretending to be a carousel
    //Removing and adding `is-active` with a gap of time, does a fake effect of fade-out
    if (!this.backgroundImageElement){
      return;
    }
    const backgroundImageElement = this.backgroundImageElement;
    if (!this.backgroundImageElements) {
      return;
    }
    const backgroundImageElements = this.backgroundImageElements;
    backgroundImageElement.classList.remove('is-active');
    backgroundImageElement.style.backgroundImage = backgroundImageElements[this.currentImageIndex].dataset.src;
    this.currentImageIndex++;
    if (this.currentImageIndex > backgroundImageElements.length - 1) {
      this.currentImageIndex = 0;
    }
    setTimeout(() => {
      backgroundImageElement.classList.add('is-active');
    }, 400);
  }

  componentDidMount() {
    this.setupLazyLoads();
    this.setupEventHandlers();
    this.setupCarousel();
  }

  setupLazyLoads() {
    lazyLoad();
  }

  setupEventHandlers() {
    document.addEventListener('scroll', this.handleScroll);
  }

  setupCarousel() {
    //TODO:- stop doing sht!
    this.backgroundImageElements = document.querySelectorAll('.background__image');
    setTimeout(() => {
      // for not wait 5s first time;
      this.carouselAction(); 
      this.intervalId = setInterval(this.carouselAction, 5000);
    }, 2000);
  }

  render() {
    return (
      <div className="background">
        <div className="background__carousel" ref={elem => this.backgroundImageElement = elem}>
          {images.map((elem, idx) => {
            return <div className="background__image lazy-bg" key={idx} data-src={`url(${elem})`}></div>;
          })}
        </div>
        <div className="background__gradient"></div>
      </div>
    );
  }
}

export default Background;
