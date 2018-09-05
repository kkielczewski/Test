import React from 'react';
import VideoCard from '../components/video-card';
import { getSomeVideos } from '../utils/youtube-utils';

class MainArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: []
    };
  }

  async componentDidMount() {
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    this.setState({ allVideos: object.videos });
  }

  render() {
    return (
      <div>
        <div className='mainMovies' >
        {this.state.allVideos.slice(0, 6).map(video => <VideoCard imageClass='listImage' contentClass='listContent' video={video} />)}
        </div>
      </div>
    );
  }
}

export default MainArticles;
