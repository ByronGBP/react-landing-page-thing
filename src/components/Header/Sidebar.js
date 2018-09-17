// @flow
import React, { Fragment, Component } from 'react';

type Props = {
}

class Sidebar extends Component<Props> {

  render() {
    return (
      <Fragment>
        <div className="pb-75"></div>
        <div className="sidebar__container">
          <div className="sidebar__content">
            <ul>
              <li className="sidebar__item"><a>Projects</a></li>
              <li className="sidebar__item"><a>About</a></li>
              <li className="sidebar__item"><a>Contact</a></li>
              <li className="sidebar__item"><a>Es</a></li>
            </ul>
          </div>
          <a className="sidebar__legal-link">Legal Notice</a>
        </div>
      </Fragment>
    );
  }
}
export default Sidebar;
