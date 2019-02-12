import React from 'react';
import { Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import queryString from 'query-string';
import VideoCard from '../components/video-card';
import Newsletter from '../components/newsletter';
import { getSomeVideos, getAllVideos } from '../utils/youtube-utils';

class VideosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideos: [],
      activePage: 1,
      totalCount: null,
      pageChange: false
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    const object = await getAllVideos('UUlYlNvdBOuwuQZrCle9BrcA');
    console.log(object);
    if (queryString.parse(this.props.query).page) {
      if (object.totalCount > (parseInt(queryString.parse(this.props.query).page, 10) - 1) * 8) {
        this.setState({ allVideos: object, activePage: parseInt(queryString.parse(this.props.query).page, 10), currentVideos: object.slice((parseInt(queryString.parse(this.props.query).page, 10) - 1) * 8, parseInt(queryString.parse(this.props.query).page, 10) * 8), totalCount: object.length });
      } else {
        this.setState({ allVideos: object, currentVideos: object.slice(0, 8), totalCount: object.length, pageChange: true });
      }
    } else {
      this.setState({ allVideos: object, currentVideos: object.slice(0, 8), totalCount: object.length });
    }
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.allVideos.slice(offset, offset + 8);
    this.setState({ activePage: pageNumber, currentVideos: currentItems, pageChange: true });
  }

  render() {
    const redirect = this.state.pageChange ? <Redirect to={{ pathname: '/video', search: `?page=${this.state.activePage}` }} /> : <div></div>;
    return (
      <div className='videoContainer' >
        {redirect}
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
