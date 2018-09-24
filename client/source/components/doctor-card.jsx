import React from 'react';
import { Card, Image, Responsive } from 'semantic-ui-react';
import DoctorPlaceholder from '../assets/images/avatarPlaceholder.png';

class DoctorCard extends React.Component {
  render() {
    return (
      <Card>
        <a style={{ height: '100%' }} draggable='false' href={this.props.link} >
        <Image src={DoctorPlaceholder} className={this.props.imageClass} />
        <Responsive minWidth='1025' style={{ height: '100%' }} >
        <div className='black'>
          <Card.Content className={this.props.contentClass} >
            <Card.Header>{this.props.link}</Card.Header>
          </Card.Content>
        </div>
        </Responsive>
        <Responsive maxWidth='1024' >
          <Card.Content className={this.props.contentClass} >
            <Card.Header>{this.props.link}</Card.Header>
          </Card.Content>
        </Responsive>
        </a>
      </Card>
    );
  }
}

export default DoctorCard;
