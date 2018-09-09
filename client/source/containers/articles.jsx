import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import Pagination from 'react-js-pagination';
import ProductCard from '../components/product-card';
import MainMovies from './main-movies';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import ArticleCard from '../components/article-card';
import Newsletter from '../components/newsletter';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      currentArticles: [],
      allProducts: [],
      activePage: 1,
      totalCount: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    const articles = [{ link: '/article/1', title: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/2', title: '2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/3', title: '3', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/4', title: '4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/5', title: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/6', title: '6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.', thumbnails: '' },
      { link: '/article/7', title: '7', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' },
      { link: '/article/8', title: '8', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/9', title: '9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/10', title: '10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' }];

    const products = [{ link: '/doctor/1', name: 'product1', price: '1', thumbnail: '' },
      { link: '/doctor/2', name: 'product2', price: '2', thumbnail: '' },
      { link: '/doctor/3', name: 'product3', price: '3', thumbnail: '' },
      { link: '/doctor/4', name: 'product4', price: '4', thumbnail: '' },
      { link: '/doctor/5', name: 'product5', price: '5', thumbnail: '' },
      { link: '/doctor/6', name: 'product6', price: '6', thumbnail: '' },
      { link: '/doctor/7', name: 'product7', price: '7', thumbnail: '' },
      { link: '/doctor/8', name: 'product8', price: '8', thumbnail: '' },
      { link: '/doctor/9', name: 'product9', price: '9', thumbnail: '' },
      { link: '/doctor/10', name: 'product10', price: '10', thumbnail: '' },
      { link: '/doctor/11', name: 'product11', price: '11', thumbnail: '' },
      { link: '/doctor/12', name: 'product12', price: '12', thumbnail: '' },
      { link: '/doctor/13', name: 'product13', price: '13', thumbnail: '' },
      { link: '/doctor/14', name: 'product14', price: '14', thumbnail: '' }];

    this.setState({ allArticles: articles, allProducts: products, currentArticles: articles.slice(0, 6), totalCount: 10 });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 6;
    const currentItems = this.state.allArticles.slice(offset, offset + 6);
    this.setState({ activePage: pageNumber, currentArticles: currentItems });
  }

  render() {
    const productsSettings = {
      className: 'productCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 7,
      speed: 1000,
      focusOnSelect: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className='mainContainer' >
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} >
          <div style={{ position: 'absolute', left: '0', bottom: '0', width: '100%' }} ><div className='pictureHeader' >Artykuły</div></div>
        </div>
        <div className='articleContainer' >
          <div className='videoList' >
            {this.state.currentArticles.map(article => <ArticleCard id='1' article={article} image={ArticlePlaceholder} imageClass='listImage' />)}
            <div className='videoNav' >
              <Pagination
              hideFirstLastPages
              activePage={this.state.activePage}
              itemsCountPerPage={6}
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

        <Header dividing textAlign='center' size='huge' >Ostatnie Filmy</Header>
        <MainMovies />
        <Header textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default Articles;
