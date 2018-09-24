import React from 'react';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import VideosList from './videos-list';
import MainArticles from './main-articles';
import ProductCarousel from './product-carousel';

class Video extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />
        <VideosList />
        <MainArticles />
        <ProductCarousel />
      </div>
    );
  }
}

export default Video;
