import React from 'react';
import Pagination from 'react-js-pagination';
import VideoPanel from '../components/video-panel';
import { getSomeVideos } from '../utils/youtube-utils';

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      allVideos: [],
      currentVideos: [],
      totalCount: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    const object = await getSomeVideos('UU4onFA8bcsYEzZet0AOlDgg');
    this.setState({ allVideos: object.videos, currentVideos: object.videos.slice(0, 4), totalCount: object.totalCount });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 4;
    const currentItems = this.state.allVideos.slice(offset, offset + 4);
    this.setState({ activePage: pageNumber, currentVideos: currentItems });
  }

  render() {
    return (
      <div className='videoFeed' >
        {this.state.currentVideos.map(video => <VideoPanel video={video} />)}
        <div style={{ width: '100%', textAlign: 'center' }} >
          <Pagination
          hideDisabled
          hideFirstLastPages
          activePage={this.state.activePage}
          itemsCountPerPage={4}
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
    );
  }
}

export default Videos;
