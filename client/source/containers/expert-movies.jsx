import React from 'react';
import { Header } from 'semantic-ui-react';
import VideoCard from '../components/video-card';

class ExpertMovies extends React.Component {
  render() {
    return (
      <div className='whiteContainer' >
        <div className='background whiteDoctorMovies' />
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts productHeader' textAlign='center' size='huge' >Inne filmy experta</Header>
        <div className='otherMovies' >
          <div className='mainMovies' >
            {this.props.expertVideos.slice(0, 6).map(video => <VideoCard video={video} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default ExpertMovies;
