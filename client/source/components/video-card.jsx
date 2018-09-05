import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class VideoCard extends React.Component {
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
      this.props.history.push(`/video/${this.props.video.snippet.resourceId.videoId}`);
    }
  }

  render() {
    return (
      <Card>
        <div onMouseDown={this.MouseDown} onMouseUp={this.MouseUp} style={{ position: 'absolute', top: '0', width: '100%', height: '100%', zIndex: '100', cursor: 'pointer' }} ></div>
        <Image src={this.props.video.snippet.thumbnails.standard.url} className={this.props.imageClass} />
      </Card>
    );
  }
}

export default withRouter(VideoCard);
