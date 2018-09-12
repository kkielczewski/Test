import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class VideoCardBig extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`//youtube.com/watch?v=${this.props.id}`} className={this.props.imageClass} style={{ zIndex: '10' }} />
        <Image src={this.props.image} className={this.props.imageClass} />
      </Card>
    );
  }
}

export default VideoCardBig;
