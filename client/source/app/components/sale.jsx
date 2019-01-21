import React from 'react';
import { Image } from 'semantic-ui-react';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import Alerbon from '../assets/products/allergy/alerbon.jpg';

// <div className='salePicture' style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />

class Sale extends React.Component {
  render() {
    return (
      <div className='sale' >
        <a draggable='false' href='allecco.pl' />
        <Image src={Alerbon} />
      </div>
    );
  }
}

export default Sale;
