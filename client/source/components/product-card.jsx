import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Alantan from '../assets/products/allergy/alantan.jpg';
import Alerbon from '../assets/products/allergy/alerbon.jpg';

class DoctorCard extends React.Component {
  render() {
    const pic = this.props.product.price % 2 == 0 ? <div style={{ position: 'relative', height: '300px' }} ><Image src={Alantan} style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', margin: 'auto', top: '0', bottom: '0', left: '0', right: '0' }} /></div> : <div style={{ position: 'relative', height: '300px' }} ><Image src={Alerbon} style={{ maxWidth: '100%', maxHeight: '100%', position: 'absolute', margin: 'auto', top: '0', bottom: '0', left: '0', right: '0' }} /></div>
    return (
      <Card style={{ margin: '0', maxHeight: '360px' }} >
        {pic}
        <Card.Content >
          <Card.Header>{this.props.product.name}</Card.Header>
          <Card.Description>{this.props.product.price}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default DoctorCard;
