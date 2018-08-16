import React from 'react';

class FacebookItem extends React.Component {
  render() {
    return (
        <iframe src={this.props.source}
        width={this.props.width}
        height={this.props.height}
        className="facebookItem"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"></iframe>
    );
  }
}

export default FacebookItem;
