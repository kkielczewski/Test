import React from 'react';
import ExpertsList from './experts-list';
import MainMovies from './main-movies';
import ProductCarousel from './product-carousel';

class Experts extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <ExpertsList />
        <MainMovies />
        <ProductCarousel />
      </div>
    );
  }
}

export default Experts;
