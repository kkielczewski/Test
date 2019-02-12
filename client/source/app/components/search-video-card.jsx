import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class SearchVideoCard extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`/video/${this.props.video.id.videoId}`} >
          <Image src={this.props.video.snippet.thumbnails.high.url} className={this.props.imageClass} />
        </a>
      </Card>
    );
  }
}

export default SearchVideoCard;
