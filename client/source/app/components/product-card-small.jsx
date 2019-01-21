import React from 'react';
import { Card, Image } from 'semantic-ui-react';

// <Card.Content className={this.props.contentClass} >
// <Card.Header>{this.props.product.name}</Card.Header>
// <Card.Description>{`${this.props.product.price} zł`}</Card.Description>
// </Card.Content>;

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
      window.location = `//allecco.pl/${this.props.product.link}`;
    }
  }

  render() {
    return (
      <Card>
        <a draggable='false' href={`//allecco.pl/${this.props.product.link}`} >
          <div className='imageContainer' ><Image src={`//allecco.pl/${this.props.product.thumbnail}`} className={this.props.imageClass} /></div>
          <Card.Content className={this.props.contentClass} >
            <Card.Header>{this.props.product.name}</Card.Header>
            <Card.Description>{`${this.props.product.price} zł`}</Card.Description>
          </Card.Content>
        </a>
      </Card>
    );
  }
}

export default DoctorCard;
