import React from 'react';
import MainSales from'./main-sales';
import MainMovies from './main-movies';
import ProductCarousel from './product-carousel';

class Sales extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' />
        <MainSales />
        <MainMovies />
        <ProductCarousel />
      </div>
    );
  }
}

export default Sales;
