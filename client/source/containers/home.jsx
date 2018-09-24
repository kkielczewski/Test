import React from 'react';
import VideoCarousel from './video-carousel';
import ExpertCarousel from './expert-carousel';
import ProductCarousel from './product-carousel';
import Survey from '../components/survey';
import MainArticles from './main-articles';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';


class Home extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center`, boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.3)' }} />
        <VideoCarousel />
        <MainArticles />
        <ExpertCarousel />
        <Survey/>
        <ProductCarousel />
      </div>
    );
  }
}

export default Home;
