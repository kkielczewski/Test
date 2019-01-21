import React from 'react';
import { Header } from 'semantic-ui-react';
import VideoCard from '../components/video-card';
import { getSomeVideos } from '../utils/youtube-utils';

class MainMovies extends React.Component {
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
      <div className='whiteContainer whiteMainMovies' >
        <div className='background whiteMovies' />
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts mainMoviesHeader' textAlign='center' size='huge' >Najnowsze Filmy</Header>
        <div className='mainMovies' >
          {this.state.allVideos.slice(0, 6).map(video => <VideoCard video={video} />)}
        </div>
      </div>
    );
  }
}

export default MainMovies;
