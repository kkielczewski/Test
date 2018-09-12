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

    const products = [{ link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' },
      { link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' }];

    this.setState({ allProducts: products });
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
        <Header dividing textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default Contact;
