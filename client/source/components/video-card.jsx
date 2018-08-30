import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class VideoCard extends React.Component {
  render() {
    return (
      <Card>
        <NavLink className={this.props.imageClass} style={{ zIndex: '10' }} to={`/video/${this.props.video.snippet.resourceId.videoId}`} />
        <Image src={this.props.video.snippet.thumbnails.standard.url} className={this.props.imageClass} />
      </Card>
    );
  }
}

export default VideoCard;
