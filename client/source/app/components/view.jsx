import React, { Component } from 'react';
import Header from './header/header';
import Routes from '../routes';

class View extends React.Component {
  /* eslint-disable */
  render() {
    return (
      <div style={{ height: '100%' }} >
        <Header />
        <main style={{ marginTop: '40px' }}>
          <Routes/>
        </main>
      </div>
    );
  }
  /* eslint-enable */
}

export default View;
