import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class VideoCard extends React.Component {
  render() {
    console.log(this.props.video);
    return (
      <Card>
        <Image src={this.props.video.snippet.thumbnails.standard.url} className={this.props.imageClass} />
      </Card>
    );
  }
}

export default VideoCard;
