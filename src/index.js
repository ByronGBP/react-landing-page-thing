// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './pages/Root';

const container: HTMLElement | null = document.getElementById('root-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

ReactDOM.render(<Root />, container);
