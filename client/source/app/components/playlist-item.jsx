import React from 'react';
import onClickOutside from 'react-onclickoutside';

import Thumbnail from '../assets/images/thumbnail.jpg';
import VideoPanel from './video-panel';

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: 'playlistContainer',
      clicked: false,
      canClick: true
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.canClick) {
      this.setState({ canClick: false });
      setTimeout(() => this.setState({ canClick: true }), 2000);
      if (this.state.style === 'playlistContainer') {
        this.setState({ style: 'playlistContainer active', clicked: true });
      } else {
        setTimeout(() => this.setState({ clicked: false }), 2000);
        this.setState({ style: 'playlistContainer' });
      }
    }
  }

  handleClickOutside() {
    if (this.state.canClick) {
      this.setState({ canClick: false });
      setTimeout(() => this.setState({ canClick: true }), 2000);
      if (this.state.style !== 'playlistContainer') {
        setTimeout(() => this.setState({ clicked: false }), 2000);
        this.setState({ style: 'playlistContainer' });
      }
    }
  }

  render() {
    let item = <div></div>;
    if (this.state.clicked) {
      item = <VideoPanel video={this.props.video} />;
    } else {
      item = <div></div>;
    }
    return (
      <div className={this.state.style} >
        <div className="playlistItem" onClick={this.handleClick} >
          <img className="thumbnail" src={this.props.thumbnail} />
          <div className="title" >{this.props.title}</div>
        </div>
        {item}
      </div>
    );
  }
}

export default onClickOutside(PlaylistItem);
