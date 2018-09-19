import React from 'react';
import { Card, Image } from 'semantic-ui-react';

// <Card.Content >
// <Card.Header>{this.props.product.name}</Card.Header>
// <Card.Description>{`${this.props.product.price} zł`}</Card.Description>
// </Card.Content>;

class DoctorCard extends React.Component {
  render() {
    return (
      <Card>
        <a style={{ backgroundColor: 'white', boxShadow: '0 2px 10px 4px rgba(34, 36, 38, 0.12), 0 2px 10px 0 rgba(34, 36, 38, 0.15)' }} draggable='false' href={`//allecco.pl/${this.props.product.link}`} >
          <div className='productPicture' ><Image src={`//allecco.pl/${this.props.product.thumbnail}`} /></div>
        </a>
      </Card>
    );
  }
}

export default DoctorCard;
