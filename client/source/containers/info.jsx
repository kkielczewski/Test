import React from 'react';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import Newsletter from '../components/newsletter';
import InfoDescription from './info-description';
import ProductCarousel from './product-carousel';

class Info extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />
        <InfoDescription />
        <div className='infoNewsletter' >
          <Newsletter />
        </div>
        <ProductCarousel />
      </div>
    );
  }
}

export default Info;
