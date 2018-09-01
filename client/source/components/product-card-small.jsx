import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Alantan from '../assets/products/allergy/alantan.jpg';
import Alerbon from '../assets/products/allergy/alerbon.jpg';

class DoctorCard extends React.Component {
  render() {
    const pic = this.props.product.price % 2 == 0 ? <div className='imageContainer' ><Image src={Alantan} className={this.props.imageClass} /></div> : <div className='imageContainer' ><Image src={Alerbon} className={this.props.imageClass} /></div>
    return (
      <Card>
        {pic}
        <Card.Content className={this.props.contentClass} >
          <Card.Header>{this.props.product.name}</Card.Header>
          <Card.Description>{this.props.product.price}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default DoctorCard;
