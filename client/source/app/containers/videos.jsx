import React from 'react';
import VideosList from './videos-list';
import MainArticles from './main-articles';
import ProductCarousel from './product-carousel';

class Video extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <VideosList />
        <MainArticles />
        <ProductCarousel />
      </div>
    );
  }
}

export default Video;
