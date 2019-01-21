import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class YoutubeCard extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`//youtube.com/watch?v=${this.props.video.snippet.resourceId.videoId}`} >
          <Image src={this.props.video.snippet.thumbnails.maxres.url} className={this.props.imageClass} />
        </a>
      </Card>
    );
  }
}

export default YoutubeCard;
