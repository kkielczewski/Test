import React from 'react';
import { Header } from 'semantic-ui-react';
import YoutubeCard from '../components/youtube-card';
import { getSomeVideos } from '../utils/youtube-utils';

class ContestWinners extends React.Component {
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
        <div className='background whiteContestWinners' />
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts contestWinnersHeader' textAlign='center' size='huge' >Zwycięzcy Konkursów</Header>
        <div className='winnersMovies' >
          {this.state.allVideos.slice(0, 3).map(video => <div className='winnerContainer' ><Header className='recomendedProducts contestName' textAlign='center'>NAZWA KONKURSU</Header><Header className='recomendedProducts winnerHeader' textAlign='center'>IMIĘ NAZWISKO</Header><YoutubeCard video={video} /></div>)}
        </div>
      </div>
    );
  }
}

export default ContestWinners;
