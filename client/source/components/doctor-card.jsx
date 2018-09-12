import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import DoctorPlaceholder from '../assets/images/avatarPlaceholder.png';

class DoctorCard extends React.Component {
  render() {
    return (
      <Card>
        <a href={this.props.link} >
        <Image src={DoctorPlaceholder} className={this.props.imageClass} />
        <div className='black' />
        <Card.Content className={this.props.contentClass} >
          <Card.Header>{this.props.link}</Card.Header>
        </Card.Content>
        </a>
      </Card>
    );
  }
}

export default withRouter(DoctorCard);
