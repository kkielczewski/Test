import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/app';
import Promise from 'promise-polyfill';
import './styles/base.scss';

import 'jquery/src/jquery';
import '../node_modules/toastr/build/toastr.min.css';

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
