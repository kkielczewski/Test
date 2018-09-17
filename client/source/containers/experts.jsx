import React from 'react';
import { Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import Pagination from 'react-js-pagination';
import ProductCard from '../components/product-card';
import DoctorCard from '../components/doctor-card';
import MainMovies from './main-movies';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';

class Experts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      allExperts: [],
      currentExperts: [],
      activePage: 1,
      totalCount: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    const doctors = [{ link: '/expert/1', thumbnail: '' },
      { link: '/expert/2', thumbnail: '' },
      { link: '/expert/3', thumbnail: '' },
      { link: '/expert/4', thumbnail: '' },
      { link: '/expert/5', thumbnail: '' },
      { link: '/expert/6', thumbnail: '' },
      { link: '/expert/7', thumbnail: '' },
      { link: '/expert/8', thumbnail: '' },
      { link: '/expert/9', thumbnail: '' },
      { link: '/expert/10', thumbnail: '' },
      { link: '/expert/11', thumbnail: '' },
      { link: '/expert/12', thumbnail: '' },
      { link: '/expert/13', thumbnail: '' },
      { link: '/expert/14', thumbnail: '' }];

    const products = [{ link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' },
      { link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' }];

    this.setState({ allProducts: products, allExperts: doctors, currentExperts: doctors.slice(0, 12), totalCount: 14 });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 12;
    const currentItems = this.state.allExperts.slice(offset, offset + 12);
    this.setState({ activePage: pageNumber, currentExperts: currentItems });
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
        <div className='doctorsContainer' >
          <div className='whiteContainer whiteFull' >
          <div className='doctorList' >
          <Header className='recomendedProducts articlesHeader' textAlign='center' size='huge' >Eskperci</Header>
            {this.state.currentExperts.map(expert => <DoctorCard link={expert.link} contentClass='doctorContent' imageClass='Image' />)}
            <div className='doctorNav' >
              <Pagination
              hideFirstLastPages
              activePage={this.state.activePage}
              itemsCountPerPage={12}
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
          </div>
        </div>
        <div className='whiteContainer' >
          <div className='background whiteMovies' />
          <Header className='recomendedProducts mainMoviesHeader' dividing textAlign='center' size='huge' >Najnowsze Filmy</Header>
          <MainMovies />
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

export default Experts;
