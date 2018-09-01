import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import Pagination from 'react-js-pagination';
import ProductCard from '../components/product-card';
import MainArticles from './main-articles';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import VideoCard from '../components/video-card';
import Newsletter from '../components/newsletter';
import { getSomeVideos } from '../utils/youtube-utils';
import VideoPlaceholder from '../assets/images/video-placeholder.jpg';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideos: [],
      allProducts: [],
      activePage: 1,
      totalCount: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageChange4 = this.handlePageChange4.bind(this);
  }

  async componentDidMount() {
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

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

    this.setState({ allVideos: object.videos, allProducts: products, currentVideos: object.videos.slice(0, 8), totalCount: object.totalCount });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.allVideos.slice(offset, offset + 8);
    this.setState({ activePage: pageNumber, currentVideos: currentItems });
  }

  handlePageChange4(pageNumber) {
    const offset = (pageNumber - 1) * 4;
    const currentItems = this.state.allVideos.slice(offset, offset + 4);
    this.setState({ activePage: pageNumber, currentVideos: currentItems });
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
      <div style={{ marginTop: '53px' }}>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} >
          <div style={{ position: 'absolute', left: '0', bottom: '0', padding: '1% 5%', fontSize: '4em' }} >Filmy</div>
        </div>
        <div className='videoContainer' >
          <Responsive minWidth='761' style={{ margin: 'auto 0 auto auto' }} >
          <div className='videoList' >
            {this.state.currentVideos.map(video => <VideoCard video={video} image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' />)}
            <div className='videoNav' >
              <Pagination
              hideDisabled
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
          </Responsive>
          <Responsive maxWidth='760' >
          <div className='videoList' >
            {this.state.currentVideos.slice(0,4).map(video => <VideoCard video={video} image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' />)}
            <div className='videoNav' >
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
              onChange={this.handlePageChange4}
              />
            </div>
          </div>
          </Responsive>
          <div className='newsletterContainer' >
            <Newsletter />
          </div>
        </div>

        <Header dividing textAlign='center' size='huge' >Ostatnie Artykuły</Header>
        <MainArticles max={6} />
        <Header textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default Video;
