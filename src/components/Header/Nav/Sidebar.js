// @flow
import React, { Fragment, Component } from 'react';

type Props = {
  isDisplay: boolean;
}

const Sidebar = ({ isDisplay }: Props) =>  (
  <div className={`sidebar ${isDisplay ? 'is-display': ''}`}>
    <div className="sidebar__container">
      <div className="sidebar__content">
        <ul>
          <li className="sidebar__item"><a>Projects</a></li>
          <li className="sidebar__item"><a>About</a></li>
          <li className="sidebar__item"><a>Contact</a></li>
          <li className="sidebar__item"><a>Es</a></li>
        </ul>
      </div>
    </div>
  </div>
);


export default Sidebar;
