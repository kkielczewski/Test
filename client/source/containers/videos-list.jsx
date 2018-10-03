import React from 'react';
import { Header } from 'semantic-ui-react';
import Pagination from 'react-js-pagination';
import VideoCard from '../components/video-card';
import Newsletter from '../components/newsletter';
import { getSomeVideos } from '../utils/youtube-utils';

class VideosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideos: [],
      activePage: 1,
      totalCount: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    this.setState({ allVideos: object.videos, currentVideos: object.videos.slice(0, 8), totalCount: object.totalCount });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.allVideos.slice(offset, offset + 8);
    this.setState({ activePage: pageNumber, currentVideos: currentItems });
  }

  render() {
    return (
      <div className='videoContainer' >
        <div className='videoList' >
          <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
          <Header className='recomendedProducts moviesHeader' textAlign='center' size='huge' >Filmy</Header>
          {this.state.currentVideos.map(video => <VideoCard video={video} />)}
          <div className='videoNav' >
            <Pagination
            hideFirstLastPages
            activePage={this.state.activePage}
            itemsCountPerPage={8}
            totalItemsCount={this.state.totalCount}
            pageRangeDisplayed={5}
            activeClass="activeli"
            activeLinkClass="active"
            linkClassPrev="prev"
            linkClassNext="next"
            prevPageText="<"
            nextPageText='>'
            onChange={this.handlePageChange}
            />
          </div>
        </div>
        <div className='newsletterContainer' >
          <Newsletter />
        </div>
      </div>
    );
  }
}

export default VideosList;
