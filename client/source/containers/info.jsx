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
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />
        <div className='infoDescriptionContainer' >
          <div className='whiteContainer' >
          <div className='description' >
            <Header className='recomendedProducts articlesHeader' textAlign='center' size='huge' >O Nas</Header>
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
                <li><b>W naszej czytelni na pewno znajdziesz coś dla siebie:</b> <a href="//allecco.pl/czytelnia" >www.allecco.pl/czytelnia</a></li>
              </ul>
              <p>Dziękujemy, że jesteś z nami - zespół allecco.pl</p>
            </div>
          </div>
          </div>
        </div>
        <div className='infoNewsletter' >
          <Newsletter />
        </div>
        <div className='whiteContainer' >
          <Header className='recomendedProducts productHeader' dividing textAlign='center' size='huge' >Polecane produkty</Header>
          <Slider {...productsSettings} >
            {this.state.allProducts.map(product => <ProductCard product={product} />)}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Info;
