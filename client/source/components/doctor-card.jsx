import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import DoctorPlaceholder from '../assets/images/avatarPlaceholder.png';

class DoctorCard extends React.Component {
  render() {
    return (
      <Card style={{ overflow: 'hidden', width: '100%', minHeight: '280px' }} >
        <Image src={DoctorPlaceholder} style={{ width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', zIndex: '1' }} />
      </Card>
    );
  }
}

export default DoctorCard;
