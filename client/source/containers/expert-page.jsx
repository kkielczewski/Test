import React from 'react';
import { Header } from 'semantic-ui-react';
import Pagination from 'react-js-pagination';
import VideoCard from '../components/video-card';
import ArticleCard from '../components/article-card';
import Advice from '../components/advice';
import { getSomeVideos } from '../utils/youtube-utils';
import Avatar from '../assets/images/avatarPlaceholder.png';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';
import ProductCarousel from './product-carousel';
import ExpertInfo from './expert-info';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expertArticles: [],
      currentArticles: [],
      totalCountArticle: null,
      activePageArticle: 1,
      expertVideos: [],
      currentVideos: [],
      totalCountVideo: null,
      activePageVideo: 1,
      name: 'Wanda Baltaza'
    };
    this.handlePageChangeVideo = this.handlePageChangeVideo.bind(this);
    this.handlePageChangeArticle = this.handlePageChangeArticle.bind(this);
  }

  async componentDidMount() {
    const allObject = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const all = [];

    allObject.videos.forEach((element) => {
      if (element.snippet.title.indexOf(this.state.name) !== -1) {
        all.push(element);
        all.push(element);
        all.push(element);
      }
    });

    const articles = [{ link: '/blog/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/blog/3', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/4', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/5', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/6', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' },
      { link: '/blog/7', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/8', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/blog/9', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/10', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/11', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/12', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' },
      { link: '/blog/11', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/11', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' }];

    const allArticles = [];

    articles.forEach((element) => {
      if (element.author.indexOf(this.state.name) !== -1) {
        allArticles.push(element);
      }
    });

    this.setState({ expertArticles: allArticles, currentArticles: allArticles.slice(0, 8), totalCountArticle: allArticles.length, expertVideos: all, currentVideos: all.slice(0,6), totalCountVideo: all.length });
  }

  handlePageChangeVideo(pageNumber) {
    const offset = (pageNumber - 1) * 6;
    const currentItems = this.state.expertVideos.slice(offset, offset + 6);
    this.setState({ activePageVideo: pageNumber, currentVideos: currentItems });
  }

  handlePageChangeArticle(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.expertArticles.slice(offset, offset + 8);
    this.setState({ activePageArticle: pageNumber, currentArticles: currentItems });
  }

  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <ExpertInfo expertClass='mainExpertInfo' expert={this.state.name} avatar={Avatar} />
        <div className='whiteContainer' >
          <div className='background' />
          <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
          <Header className='recomendedProducts expertMoviesHeader' textAlign='center' size='huge' >Filmy eksperta</Header>
          <div className='mainMovies' >
            {this.state.currentVideos.map(video => <VideoCard video={video} />)}
          </div>
          <div className='videoNav' >
            <Pagination
            hideFirstLastPages
            activePage={this.state.activePageVideo}
            itemsCountPerPage={6}
            totalItemsCount={this.state.totalCountVideo}
            pageRangeDisplayed={5}
            activeClass="activeli"
            activeLinkClass="active"
            linkClassPrev="prev"
            linkClassNext="next"
            prevPageText="<"
            nextPageText='>'
            onChange={this.handlePageChangeVideo}
            />
          </div>
        </div>
        <Advice />
        <div className='whiteContainer' >
          <div className='background' />
          <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
          <Header className='recomendedProducts expertArticlesHeader' textAlign='center' size='huge' >Artykuły eksperta</Header>
          <div className='mainArticlesContainer' >
            <div className='mainArticles' >
              {this.state.currentArticles.map(article => <ArticleCard id='1' image={ArticlePlaceholder} article={article} />)}
            </div>
          </div>
          <div className='videoNav' >
            <Pagination
            hideFirstLastPages
            activePage={this.state.activePageArticle}
            itemsCountPerPage={8}
            totalItemsCount={this.state.totalCountArticle}
            pageRangeDisplayed={5}
            activeClass="activeli"
            activeLinkClass="active"
            linkClassPrev="prev"
            linkClassNext="next"
            prevPageText="<"
            nextPageText='>'
            onChange={this.handlePageChangeArticle}
            />
          </div>
        </div>
        <ProductCarousel />
      </div>
    );
  }
}

export default VideoPage;
