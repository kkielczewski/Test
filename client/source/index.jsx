import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import App from './app/containers/app';
import { getAllCookies } from './app/utils/cookie-utils';

import './styles/base.scss';

console.log(getAllCookies());

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
