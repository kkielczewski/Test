import React from 'react';
import { Responsive } from 'semantic-ui-react';
import VideoCard from '../components/video-card';
import { getSomeVideos } from '../utils/youtube-utils';
import VideoPlaceholder from '../assets/images/video-placeholder.jpg';

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
        <Responsive minWidth={2171} >
          <div className='mainMovies' >
          {this.state.allVideos.slice(0, 4).map(video => <VideoCard image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' video={video} />)}
          </div>
        </Responsive>
        <Responsive minWidth={1021} maxWidth={2170} >
          <div className='mainMovies' >
          {this.state.allVideos.slice(0, 3).map(video => <VideoCard image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' video={video} />)}
          </div>
        </Responsive>
        <Responsive minWidth={761} maxWidth={1020} >
          <div className='mainMovies' >
          {this.state.allVideos.slice(0, 4).map(video => <VideoCard image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' video={video} />)}
          </div>
        </Responsive>
        <Responsive maxWidth={760} >
          <div className='mainMovies' >
          {this.state.allVideos.slice(0, 4).map(video => <VideoCard image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' video={video} />)}
          </div>
        </Responsive>
      </div>
    );
  }
}

export default MainArticles;
