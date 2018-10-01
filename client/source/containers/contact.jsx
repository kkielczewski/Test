import React from 'react';
import ContactDescription from './contact-description';
import Newsletter from '../components/newsletter';
import ProductCarousel from './product-carousel';

class Contact extends React.Component {

  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
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
