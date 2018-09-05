import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import DoctorPlaceholder from '../assets/images/avatarPlaceholder.png';

class DoctorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null
    }

    this.MouseUp = this.MouseUp.bind(this);
    this.MouseDown = this.MouseDown.bind(this);
  }

  MouseDown(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  MouseUp(e) {
    if (e.screenX === this.state.x && e.screenY === this.state.y) {
      this.props.history.push(this.props.link);
    }
  }

  render() {
    return (
      <Card>
        <div onMouseDown={this.MouseDown} onMouseUp={this.MouseUp} style={{ position: 'absolute', top: '0', width: '100%', height: '100%', zIndex: '100', cursor: 'pointer' }} ></div>
        <Image src={DoctorPlaceholder} className={this.props.imageClass} />
        <div className='black' />
        <Card.Content className={this.props.contentClass} >
          <Card.Header>{this.props.link}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

export default withRouter(DoctorCard);
