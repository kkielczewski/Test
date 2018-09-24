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
        <a style={{ backgroundColor: 'white', boxShadow: '4px 6px 12px 0px rgba(0,0,0,0.3)' }} draggable='false' href={`//allecco.pl/${this.props.product.link}`} >
          <div className='productPicture' ><Image src={`//allecco.pl/${this.props.product.thumbnail}`} /></div>
        </a>
      </Card>
    );
  }
}

export default DoctorCard;
