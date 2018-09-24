import React from 'react';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import ContactDescription from './contact-description';
import Newsletter from '../components/newsletter';
import ProductCarousel from './product-carousel';

class Contact extends React.Component {

  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />
        <ContactDescription />
        <div className='infoNewsletter' >
          <Newsletter />
        </div>
        <ProductCarousel />
      </div>
    );
  }
}

export default Contact;
