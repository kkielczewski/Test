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
        <a draggable='false' href={`//allecco.pl/${this.props.product.link}`} >
          <div className='productPicture' ><Image src={`//allecco.pl/${this.props.product.thumbnail}`} /></div>
          <Card.Content >
            <Card.Header>{this.props.product.name}</Card.Header>
            <Card.Description>{`${this.props.product.price} zł`}</Card.Description>
          </Card.Content>
        </a>
      </Card>
    );
  }
}

export default DoctorCard;
