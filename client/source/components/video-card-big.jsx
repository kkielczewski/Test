import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class VideoCardBig extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`//youtube.com/watch?v=${this.props.id}`} />
        <Image src={this.props.image} />
      </Card>
    );
  }
}

export default VideoCardBig;
