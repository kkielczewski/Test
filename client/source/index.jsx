import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import App from './app/containers/app';

import './styles/base.scss';

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
