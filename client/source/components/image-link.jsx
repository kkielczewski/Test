import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class ImageLink extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={this.props.link} />
        <Image src={this.props.image} />
      </Card>
    );
  }
}

export default ImageLink;
