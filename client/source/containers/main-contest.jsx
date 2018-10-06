import React from 'react';
import { Button, Header, Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import Pagination from 'react-js-pagination';
import VideoCardBig from '../components/video-card-big';
import VideoCard from '../components/video-card';
import { getVideo, getSomeVideos } from '../utils/youtube-utils';

class MainContest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      url: '',
      allVideos: [],
      currentVideos: [],
      activeVideos: 1,
      totalVideos: null
    };
    this.handleVideosChange = this.handleVideosChange.bind(this);
  }

  async componentDidMount() {
    const object = await getVideo('ijck5-u4yoI');
    const object2 = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    this.setState({ id: object.id, url: object.snippet.thumbnails.maxres.url, allVideos: object2.videos, currentVideos: object2.videos.slice(0, 4), totalVideos: object2.totalCount });
  }

  handleVideosChange(pageNumber) {
    const offset = (pageNumber - 1) * 4;
    const currentItems = this.state.allVideos.slice(offset, offset + 4);
    this.setState({ activeVideos: pageNumber, currentVideos: currentItems });
  }

  render() {
    const videoSettings = {
      className: 'contestCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 3,
      speed: 500,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className='contestContainer' >
        <div className='contest' >
          <VideoCardBig id={this.state.id} image={this.state.url} />
          <div className='contestInfo' >
            <Header>Nazwa Konkursu</Header>
            <p>Zasady konkursu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum</p>
            <div className='buttonWrapper' ><Button >WYŚLIJ ZGŁOSZENIE</Button></div>
          </div>
        </div>
        <div className='contestMovies' >
          <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
          <Header className='recomendedProducts mainContestHeader' textAlign='center' >FILMY UCZESTNIKÓW</Header>
          <Responsive minWidth='1021' >
            <Slider {...videoSettings} >
              {this.state.allVideos.map(video => <div className='contestCard' ><VideoCard video={video} /></div>)}
            </Slider>
          </Responsive>
        </div>
      </div>
    );
  }
}

export default MainContest;
