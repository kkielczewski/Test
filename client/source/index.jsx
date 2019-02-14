import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import App from './app/containers/app';
import { getAllCookies, getCookie, setCookie } from './app/utils/cookie-utils';

import './styles/base.scss';

if (!getCookie('token')) {
  setCookie('token', 'jwt', { maxAge: 7600 });
}

console.log(getCookie('token'));

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
