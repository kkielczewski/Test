import React from 'react';
import VideoCarousel from './video-carousel';
import AllContests from './all-contests';
import ProductCarousel from './product-carousel';
import Survey from '../components/survey';
import MainArticles from './main-articles';


class Home extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <VideoCarousel />
        <AllContests />
        <Survey/>
        <MainArticles />
        <ProductCarousel />
      </div>
    );
  }
}

export default Home;
