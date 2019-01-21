import React from 'react';
import { Tab } from 'semantic-ui-react';
import Pagination from 'react-js-pagination';
import queryString from 'query-string';
import VideoCard from '../components/video-card';
import ArticleCard from '../components/article-card';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';
import DoctorCard from '../components/doctor-card';
import ProductCarousel from './product-carousel';
import { getSomeVideos } from '../utils/youtube-utils';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideos: [],
      totalCountVideo: null,
      activePageVideo: 1,
      articles: [],
      currentArticles: [],
      totalCountArticle: null,
      activePageArticle: 1,
      experts: [],
      currentExperts: [],
      totalCountExpert: null,
      activePageExpert: 1
    };
    this.handlePageChangeVideo = this.handlePageChangeVideo.bind(this);
    this.handlePageChangeArticle = this.handlePageChangeArticle.bind(this);
    this.handlePageChangeExpert = this.handlePageChangeExpert.bind(this);
  }

  async componentDidMount() {
    console.log(queryString.parse(this.props.location.search));
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const articles = [{ link: '/blog/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' }];

    const experts = [{ link: '/expert/1', thumbnail: '' },
      { link: '/expert/2', thumbnail: '' },
      { link: '/expert/3', thumbnail: '' }];

    this.setState({ videos: object.videos, currentVideos: object.videos.slice(0, 6), totalCountVideo: object.videos.length, articles, currentArticles: articles.slice(0, 8), totalCountArticle: articles.length, experts, currentExperts: experts.slice(0, 12), totalCountExpert: experts.length });
  }

  handlePageChangeVideo(pageNumber) {
    const offset = (pageNumber - 1) * 6;
    const currentItems = this.state.videos.slice(offset, offset + 6);
    this.setState({ activePageVideo: pageNumber, currentVideos: currentItems });
  }

  handlePageChangeArticle(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.articles.slice(offset, offset + 8);
    this.setState({ activePageArticle: pageNumber, currentArticles: currentItems });
  }

  handlePageChangeExpert(pageNumber) {
    const offset = (pageNumber - 1) * 12;
    const currentItems = this.state.experts.slice(offset, offset + 12);
    this.setState({ activePageExpert: pageNumber, currentExperts: currentItems });
  }

  render() {
    const panes = [];
    if (this.state.videos.length !== 0) {
      panes.push({ menuItem: 'Filmy', render: () => <Tab.Pane><div className='mainMovies' >{this.state.currentVideos.map(video => <VideoCard video={video} />)}</div><div className='videoNav' ><Pagination hideFirstLastPages activePage={this.state.activePageVideo} itemsCountPerPage={6} totalItemsCount={this.state.totalCountVideo} pageRangeDisplayed={5} activeClass="activeli" activeLinkClass="active" linkClassPrev="prev" linkClassNext="next" prevPageText="<" nextPageText='>' onChange={this.handlePageChangeVideo}/></div></Tab.Pane> });
    }
    if (this.state.articles.length !== 0) {
      panes.push({ menuItem: 'Artykuły', render: () => <Tab.Pane><div className='mainArticles' >{this.state.currentArticles.map(article => <ArticleCard id='1' image={ArticlePlaceholder} article={article} />)}</div><div className='videoNav' ><Pagination hideFirstLastPages activePage={this.state.activePageArticle} itemsCountPerPage={6} totalItemsCount={this.state.totalCountArticle} pageRangeDisplayed={5} activeClass="activeli" activeLinkClass="active" linkClassPrev="prev" linkClassNext="next" prevPageText="<" nextPageText='>' onChange={this.handlePageChangeArticle}/></div></Tab.Pane> });
    }
    if (this.state.experts.length !== 0) {
      panes.push({ menuItem: 'Ekspert', render: () => <Tab.Pane><div className='doctorList' ><div></div>{this.state.currentExperts.map(expert => <DoctorCard link={expert.link} />)}</div><div className='videoNav' ><Pagination hideFirstLastPages activePage={this.state.activePageExpert} itemsCountPerPage={6} totalItemsCount={this.state.totalCountExpert} pageRangeDisplayed={5} activeClass="activeli" activeLinkClass="active" linkClassPrev="prev" linkClassNext="next" prevPageText="<" nextPageText='>' onChange={this.handlePageChangeExpert}/></div></Tab.Pane> });
    }
    if (this.state.videos.length === 0 && this.state.articles.length === 0 && this.state.experts.length === 0) {
      panes.push({ menuItem: 'Result', render: () => <Tab.Pane><div className='noMatch' >Brak pasujących wyników</div></Tab.Pane> });
    }

    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <Tab className='searchResultsContainer' panes={panes} />
        <ProductCarousel />
      </div>
    );
  }
}

export default SearchResults;
