import React from 'react';
import { Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import Newsletter from '../components/newsletter';
import ProductCard from '../components/product-card';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import Default from '../assets/images/default.jpg';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: []
    };
  }

  async componentDidMount() {

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

    this.setState({ allProducts: products });
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
          <div style={{ position: 'absolute', left: '0', bottom: '0', width: '100%'}} ><div className='pictureHeader' >Kontakt</div></div>
        </div>
        <div className='infoDescriptionContainer' >
          <div className='description' >
            <img src={Default} />
            <div className='text' >
            <p className='title' >BIURO OBSŁUGI KLIENTA</p>
            <p>Informacje na temat dostępności produktów oraz statusu realizacji zamówień udzielane są przez naszych pracowników od poniedziałku do piątku w godzinach od 8:00 do 16:00. W  przypadku pytań prosimy o kontakt telefoniczny lub mailowy.</p>
            <p>infolinia: <b>801 889 885</b></p> 
            <p>tel. <b>32 744 35 62</b> ( z telefonów komórkowych)</p>
            <p>wg stawki twojego operatora</p>
            <p>e-mail: <b>info@allecco.pl</b></p>
            <p>Administratorem serwisu allecco.pl jest MEDICARE-GALENICA Sp. z o.o. z siedzibą przy ulicy Białobrzeskiej 45 w Mysłowicach, NIP 954-21-84-194, KRS 0000066774 (Sąd Rejonowy Katowice - Wschód w Katowicach; Wydział VIII  Gospodarczy Krajowego Rejestru Sądowego) </p>
            </div>
          </div>
        </div>
        <div className='infoNewsletter' >
          <Newsletter />
        </div>
        <Header textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default Contact;
