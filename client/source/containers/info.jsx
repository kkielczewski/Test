import React from 'react';
import Newsletter from '../components/newsletter';
import InfoDescription from './info-description';
import ProductCarousel from './product-carousel';

class Info extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
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
