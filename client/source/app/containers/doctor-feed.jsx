import React from 'react';

import Avatar from '../assets/images/avatarPlaceholder.png';
import Thumbnail from '../assets/images/thumbnail.jpg';
import PlaylistItem from '../components/playlist-item';
import { getAllVideos } from '../utils/youtube-utils';
import Loading from '../components/loading';

class DoctorFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      displayLoading: 'unset'
    };
    this.generateItems = this.generateItems.bind(this);
  }

  async componentDidMount() {
    const videos = await getAllVideos('PLGBuKfnErZlAkaUUy57-mR97f8SBgMNHh');
    this.setState({ allVideos: videos, displayLoading: 'none' });
  }

  generateItems() {
    const items = this.state.allVideos.map(video => <PlaylistItem video={video}
    source={'https://www.youtube.com/embed/' + video.snippet.resourceId.videoId + '?rel=0'}
    thumbnail={video.snippet.thumbnails.default.url}
    title={video.snippet.title} />);
    return items;
  }

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div className="docFeed" >
        <div className="docMain" >
          <div className="container" >
            <img className="avatar" src={Avatar} />
            <div className="name" >dr Krzysztof Jarzyna</div>
          </div>
          <div className="line" ></div>
          <div className="description" >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="playlist" >
          {this.generateItems()}
          <div className="playlistContainer" style={{ display: this.state.displayLoading }} >
            <div className="playlistItem" >
              <Loading />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorFeed;
