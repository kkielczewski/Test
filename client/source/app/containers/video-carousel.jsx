import React from 'react';
import { Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import Pagination from 'react-js-pagination';
import VideoCard from '../components/video-card';
import { getSomeVideos } from '../utils/youtube-utils';

class VideoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideos: [],
      activeVideos: 1,
      totalVideos: null
    };
    this.handleVideosChange = this.handleVideosChange.bind(this);
  }

  async componentDidMount() {
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    this.setState({ allVideos: object.videos, currentVideos: object.videos.slice(0, 4), totalVideos: object.totalCount });
  }

  handleVideosChange(pageNumber) {
    const offset = (pageNumber - 1) * 4;
    const currentItems = this.state.allVideos.slice(offset, offset + 4);
    this.setState({ activeVideos: pageNumber, currentVideos: currentItems });
  }

  render() {
    const videoSettings = {
      className: 'videoCarousel',
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
      <div className='whiteContainer' >
        <div className='background whiteVideos' />
        <Responsive minWidth='1021' >
          <Slider {...videoSettings} >
            {this.state.allVideos.map(video => <div className='videoCard'><VideoCard video={video} /></div>)}
          </Slider>
        </Responsive>
        <Responsive maxWidth='1020' >
          <div className='homeVideosContainer' >
            <div className='homeVideos' >
            {this.state.currentVideos.map(video => <div className='videoCard'><VideoCard video={video} /></div>)}
              <div className='videoNav' >
                <Pagination
                hideFirstLastPages
                activePage={this.state.activeVideos}
                itemsCountPerPage={4}
                totalItemsCount={this.state.totalVideos}
                pageRangeDisplayed={5}
                activeClass="activeli"
                activeLinkClass="active"
                linkClassPrev="prev"
                linkClassNext="next"
                prevPageText="<"
                nextPageText='>'
                onChange={this.handleVideosChange}
                />
              </div>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

export default VideoCarousel;
