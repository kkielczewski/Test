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

    const products = [{ link: '/expert/1', name: 'product1', price: '1', thumbnail: '' },
      { link: '/expert/2', name: 'product2', price: '2', thumbnail: '' },
      { link: '/expert/3', name: 'product3', price: '3', thumbnail: '' },
      { link: '/expert/4', name: 'product4', price: '4', thumbnail: '' },
      { link: '/expert/5', name: 'product5', price: '5', thumbnail: '' },
      { link: '/expert/6', name: 'product6', price: '6', thumbnail: '' },
      { link: '/expert/7', name: 'product7', price: '7', thumbnail: '' },
      { link: '/expert/8', name: 'product8', price: '8', thumbnail: '' },
      { link: '/expert/9', name: 'product9', price: '9', thumbnail: '' },
      { link: '/expert/10', name: 'product10', price: '10', thumbnail: '' },
      { link: '/expert/11', name: 'product11', price: '11', thumbnail: '' },
      { link: '/expert/12', name: 'product12', price: '12', thumbnail: '' },
      { link: '/expert/13', name: 'product13', price: '13', thumbnail: '' },
      { link: '/expert/14', name: 'product14', price: '14', thumbnail: '' }];

    this.setState({ allProducts: products, allExperts: doctors, currentExperts: doctors.slice(0,9), totalCount: 14 });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 9;
    const currentItems = this.state.allExperts.slice(offset, offset + 9);
    this.setState({ activePage: pageNumber, currentExperts: currentItems });
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
            slidesToShow: 3
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
        <div style={{ position: 'absolute', left: '0', bottom: '0', width: '100%'}} ><div className='pictureHeader' >Eksperci</div></div>
        </div>
        <div className='doctorContainer' >
          <div className='doctorList' >
            {this.state.currentExperts.map(expert => <DoctorCard link={expert.link} contentClass='doctorContent' imageClass='Image' />)}
            <div className='doctorNav' >
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

export default Experts;
