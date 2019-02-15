import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class VideoCardBig extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`//youtube.com/watch?v=${this.props.id}`} >
          <i class="far fa-play-circle play-button"></i>
        </a>
        <Image src={this.props.image} />
      </Card>
    );
  }
}

export default VideoCardBig;
