import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class VideoCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.video.snippet.thumbnails.standard.url} className={this.props.imageClass} />
        <NavLink className={this.props.imageClass} style={{ zIndex: '10' }} to={`/video/${this.props.video.snippet.resourceId.videoId}`} />
      </Card>
    );
  }
}

export default VideoCard;
