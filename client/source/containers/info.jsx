import React from 'react';
import { Header } from 'semantic-ui-react';
import Slider from 'react-slick';
import Newsletter from '../components/newsletter';
import ProductCard from '../components/product-card';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import Default from '../assets/images/default.jpg';

class Info extends React.Component {
  
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
      <div style={{ marginTop: '53px' }}>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} >
          <div style={{ position: 'absolute', left: '0', bottom: '0', width: '100%'}} ><div className='pictureHeader' >O Nas</div></div>
        </div>
        <div className='infoDescriptionContainer' >
          <div className='description' >
            <img src={Default} />
            <div className='text' >
              <p className='title'>Kim jesteśmy?</p>
              <p className='paragraphTitle'>Allecco.pl to serwis internetowy poświęcony zdrowiu i urodzie. Działamy już od 10 lat. Wchodzimy w skład polskiej grupy Medicare, która od ćwierć wieku jest obecna na rynku farmaceutycznym.</p>
              <p>W naszym sklepie na <a href="//allecco.pl" >www.allecco.pl</a> mamy dziś dla Ciebie więcej niż kiedykolwiek: 14 tysięcy produktów, a wśród nich naturalne kosmetyki, ziołowe specyfiki, akcesoria dla mam i dzieci. Dbamy też o rodziców, sportowców i seniorów. Mamy ofertę m.in. dla gabinetów kosmetycznych, laboratoriów i domów opieki.</p>
              <p>Na <a href="//allecco.pl" >www.allecco.pl</a> składasz zamówienie jednego dnia do godz. 20, a następnego od godz. 12 (w dni robocze) odbierasz paczkę w najbliższej aptece. W sieci zrzeszamy 256 aptek w 130 miastach i systematycznie się rozwijamy. Do współpracy z nami przyłączają się kolejne apteki z całej Polski.</p>
              <p>Dbamy o Twoje bezpieczeństwo w Internecie. Zamawiając u nas kosmetyki, suplementy diety czy mleka dla dzieci, nie płacisz za towar przez Internet (chyba, że chcesz).</p>
              <p>Za darmo masz też dostawę do wybranego punktu odbioru osobistego: <a href="//allecco.pl/odbior-osobisty" >www.allecco.pl/odbior-osobisty</a>. Nie musisz się rejestrować i podawać wielu danych (wystarczy imię i nazwisko, email oraz numer telefonu, na który dostaniesz sms-a, z informacją, że zamówienie jest gotowe).</p>
              <p>Na allecco.pl czekają na Ciebie sprawdzone marki, renomowani producenci oraz farmaceuci, którzy doradzą, gdy będziesz potrzebował.</p>
              <ul>
                <li><b>Jeśli masz pytania, polecamy kontakt z opiekunem klienta.</b> Możesz dzwonić: 032 744 35 34 lub 0 801 889 885. Czeka na Ciebie od poniedziałku do piątku w godz. 8:00-16:00. Możesz też napisać: info@allecco.pl.</li>
                <li><b>Jeżeli potrzebujesz porady farmaceuty,</b> napisz do eksperta allecco.pl: farmaceuta@allecco.pl</li>
                <li><b>W naszej czytelni na pewno znajdziesz coś dla siebie:</b> www.allecco.pl/czytelnia</li>
              </ul>
              <p>Dziękujemy, że jesteś z nami - zespół allecco.pl</p>
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

export default Info;
