import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class VideoCard extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`/video/${this.props.video.snippet.resourceId.videoId}`} >
          <Image src={this.props.video.snippet.thumbnails.maxres.url} className={this.props.imageClass} />
        </a>
      </Card>
    );
  }
}

export default withRouter(VideoCard);
