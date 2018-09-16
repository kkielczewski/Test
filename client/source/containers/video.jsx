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
  }

  async componentDidMount() {
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const products = [{ link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' },
      { link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' }];

    this.setState({ allVideos: object.videos, allProducts: products, currentVideos: object.videos.slice(0, 8), totalCount: object.totalCount });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 8;
    const currentItems = this.state.allVideos.slice(offset, offset + 8);
    this.setState({ activePage: pageNumber, currentVideos: currentItems });
  }

  render() {
    const productsSettings = {
      className: 'productCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 7,
      slidesToScroll: 3,
      speed: 300,
      focusOnSelect: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 2170,
          settings: {
            slidesToShow: 6
          }
        },
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />
        <div className='videoContainer' >
          <div className='videoList' >
            <Header className='recomendedProducts moviesHeader' textAlign='center' size='huge' >Filmy</Header>
            {this.state.currentVideos.map(video => <VideoCard video={video} image={VideoPlaceholder} imageClass='listImage' contentClass='listContent' />)}
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
        <div className='whiteContainer videoMainArticles' >
          <div className='background whiteArticles' />
          <Header className='recomendedProducts mainArticlesHeader' dividing textAlign='center' size='huge' >Najnowsze Artykuły</Header>
          <MainArticles />
        </div>
        <div className='whiteContainer' >
          <div className='background whiteProduct' />
          <Header className='recomendedProducts productHeader' dividing textAlign='center' size='huge' >Polecane produkty</Header>
          <Slider {...productsSettings} >
            {this.state.allProducts.map(product => <ProductCard product={product} />)}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Video;
