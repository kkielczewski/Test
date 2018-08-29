import React from 'react';
import { Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import VideoCard from '../components/video-card';
import DoctorCard from '../components/doctor-card';
import ProductCard from '../components/product-card';
import Survey from '../components/survey';
import MainArticles from './main-articles';
import { getSomeVideos } from '../utils/youtube-utils';
import VideoPlaceholder from '../assets/images/video-placeholder.jpg'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      allDoctors: [],
      allProducts: []
    };
  }

  async componentDidMount() {
    const object = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const doctors = [{ link: '/doctor/1', thumbnail: '' },
      { link: '/doctor/2', thumbnail: '' },
      { link: '/doctor/3', thumbnail: '' },
      { link: '/doctor/4', thumbnail: '' },
      { link: '/doctor/5', thumbnail: '' },
      { link: '/doctor/6', thumbnail: '' },
      { link: '/doctor/7', thumbnail: '' }];

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

    this.setState({ allVideos: object.videos, allDoctors: doctors, allProducts: products });
  }

  render() {
    const videoSettings = {
      className: 'videoCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 3,
      speed: 1000,
      focusOnSelect: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    const doctorSettings = {
      className: 'doctorCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 5,
      speed: 1000,
      focusOnSelect: true,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1070,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
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
      <div style={{ marginTop: '80px' }}>
        <Header dividing textAlign='center' size='huge' className='homeTitle' >Allecco.tv TWÓJ PORTAL O ZDROWIU</Header>
        <Slider {...videoSettings} >
          {this.state.allVideos.map(video => <div className='videoCard'><VideoCard video={video} image={VideoPlaceholder} imageClass='videoImage' contentClass='videoContent' /></div>)}
        </Slider>
        <Header dividing textAlign='center' size='huge' >Wybierz swojego eksperta</Header>
        <Slider {...doctorSettings} >
          {this.state.allDoctors.map(doctor => <DoctorCard doctor={doctor} />)}
        </Slider>
        <Survey/>
        <Header dividing textAlign='center' size='huge' >Ostatnie Artykuły</Header>
        <MainArticles />
        <Header textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default Home;
