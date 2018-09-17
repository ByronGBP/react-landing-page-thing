// @flow
import React, { Component, Fragment } from 'react';

type Props = {
  hack: string;
};

class Landing extends Component<Props> {

  landingElement: ?HTMLElement;
  currentYOffset: number = 0;
  currentYPosition: number = 0;

  intervalId: IntervalID;
  currentImageIndex: number = 1;

  //Little hack to handle a communication from a sibling -> Loader
  handleHack = () => {
    if (this.props.hack) {
      return true;
    } else {
      console.log('nah');
    }
  }

  handleScroll = () => {
    if (!this.landingElement) {
      return;
    }
    //TODO:- isolate the parallax logic
    const element = this.landingElement;
    const pageYOffset = window.pageYOffset;
    if (pageYOffset > this.currentYOffset && this.currentYPosition > -10) {
      this.currentYPosition -= 0.1;
    } else if (pageYOffset < this.currentYOffset && this.currentYPosition < 0) {
      this.currentYPosition += 0.1;
    }
    element.style.backgroundPositionY = this.currentYPosition + 'px';

    this.currentYOffset = pageYOffset;
  }

  swapBackground = () => {
    //Little sht pretending to be a carousel
    if (!this.landingElement) {
      return;
    }
    this.landingElement.classList.toggle('ready-2');
  }

  componentDidMount() {
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    document.addEventListener('scroll', this.handleScroll);
    //TODO:- stop doing sht!
    //Hot patch for no having an aggresive background animation at the beggining
    setTimeout(() => {
      this.intervalId = setInterval(this.swapBackground, 5000);
    }, 2000);
  }

  render() {
    this.handleHack();
    return (
      <Fragment>
        <div className={`overlay ${this.handleHack() ? "overlay--hidden": ""}`} ></div>
        <section className="landing lazy-bg" ref={elem => this.landingElement=elem}>
          <div className="landing__container">
            <div className={`landing__message ${this.handleHack() ? "landing__message--active" : ""}`}>
              <h1 className="subtitle"><p>DIGITAL YOU</p></h1>
              <h3 className="title"><p>Digital experiences with results</p></h3>
            </div>
            <div className="landing__gradient">
              <div className="mouse-scroll__container">
                <div className="mouse-scroll__item"></div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Landing;
