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

  carouselElement: ?HTMLElement;
  currentYOffset: number = 0;
  currentYPosition: number = 0;
  
  intervalId: IntervalID;
  baackgroundImageElements: ?NodeList<HTMLElement>;
  currentImageIndex: number = 1;

  handleScroll = () => {
    if (!this.carouselElement) {
      return;
    }
    //TODO:- isolate the parallax logic
    const element = this.carouselElement;
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
    if (!this.carouselElement){
      return;
    }
    const carouselElement = this.carouselElement;
    if (!this.baackgroundImageElements) {
      return;
    }
    const baackgroundImageElements = this.baackgroundImageElements;
    carouselElement.classList.remove('is-active');
    carouselElement.style.backgroundImage = baackgroundImageElements[this.currentImageIndex].dataset.src;
    this.currentImageIndex++;
    if (this.currentImageIndex > baackgroundImageElements.length - 1) {
      this.currentImageIndex = 0;
    }
    setTimeout(() => {
      carouselElement.classList.add('is-active');
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
    this.baackgroundImageElements = document.querySelectorAll('.background__image');
    this.firstAnimation();
  }

  firstAnimation() {
    //Idea:- Faking an smooth animation at the beggining;
    setTimeout(() => {
      this.carouselElement.classList.remove('is-hidden');
    }, 3000);

    setTimeout(() => {
      this.carouselElement.classList.add('is-active');
      this.intervalId = setInterval(this.carouselAction, 5000);
    }, 3500);
  }

  render() {
    return (
      <div className="background">
        <div className="background__carousel is-hidden" ref={elem => this.carouselElement = elem}>
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
