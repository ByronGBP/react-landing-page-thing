// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const container: HTMLElement | null = document.getElementById('main-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

ReactDOM.render(<Home />, container);
