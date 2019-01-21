import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import Pagination from 'react-js-pagination';
import ArticleCard from '../components/article-card';
import Newsletter from '../components/newsletter';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';

class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      currentArticles: [],
      activePage: 1,
      totalCount: null,
      windowWidth: 999999
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageChangeSmall = this.handlePageChangeSmall.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount() {
    const articles = [{ link: '/blog/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/blog/3', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/4', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/5', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/6', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', thumbnails: '' },
      { link: '/blog/7', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' },
      { link: '/blog/8', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/9', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/10', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' }];

    let slice = articles.slice(0, 9);

    if (window.innerWidth < 769) {
      slice = articles.slice(0, 8);
    } else {
      slice = articles.slice(0, 9);
    }

    this.setState({ allArticles: articles, currentArticles: slice, totalCount: 10, windowWidth: window.innerWidth });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 9;
    const currentItems = this.state.allArticles.slice(offset, offset + 9);
    this.setState({ activePage: pageNumber, currentArticles: currentItems });
  }

  handlePageChangeSmall(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.allArticles.slice(offset, offset + 8);
    this.setState({ activePage: pageNumber, currentArticles: currentItems });
  }

  handleUpdate() {
    if (window.innerWidth != this.state.windowWidth) {
      if (window.innerWidth < 769 && this.state.windowWidth > 768) {
        this.setState({ activePage: 1, currentArticles: this.state.allArticles.slice(0, 8), windowWidth: window.innerWidth });
      } else if (this.state.windowWidth < 769 && window.innerWidth > 768) {
        this.setState({ activePage: 1, currentArticles: this.state.allArticles.slice(0, 9), windowWidth: window.innerWidth });
      } else {
        this.setState({ windowWidth: window.innerWidth });
      }
    }
  }

  render() {
    return (
      <div>
        <Responsive minWidth='769' onUpdate={this.handleUpdate} >
        <div className='articleContainer' >
          <div className='videoList' >
            <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
            <Header className='recomendedProducts articlesHeader' textAlign='center' size='huge' >Artykuły</Header>
            {this.state.currentArticles.map(article => <ArticleCard id='1' article={article} image={ArticlePlaceholder} />)}
            <div className='videoNav' >
              <Pagination
              hideFirstLastPages
              activePage={this.state.activePage}
              itemsCountPerPage={9}
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
        </Responsive>
        <Responsive maxWidth='768' >
        <div className='articleContainerSmall' >
          <div className='videoList' >
            <div className='smallArticlesContainer'>
            <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
            <Header className='recomendedProducts articlesHeader' textAlign='center' size='huge' >Artykuły</Header>
            {this.state.currentArticles.map(article => <ArticleCard id='1' article={article} image={ArticlePlaceholder} />)}
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
              onChange={this.handlePageChangeSmall}
              />
            </div>
            </div>
          </div>
          <div className='newsletterContainer' >
            <Newsletter />
          </div>
        </div>
        </Responsive>
      </div>
    );
  }
}

export default ArticlesList;
