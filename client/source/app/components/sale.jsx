import React from 'react';
import { Image } from 'semantic-ui-react';
import Alerbon from '../assets/products/allergy/alerbon.jpg';

// <div className='salePicture' style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />

class Sale extends React.Component {
  render() {
    return (
      <div className='sale' >
        <a draggable='false' href={this.props.sale.link} />
        <Image src={this.props.sale.thumbnail} />
      </div>
    );
  }
}

export default Sale;
