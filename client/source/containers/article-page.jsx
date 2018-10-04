import React from 'react';
import { Header, Button, Responsive } from 'semantic-ui-react';
import { getSomeVideos } from '../utils/youtube-utils';
import ArticleCard from '../components/article-card';
import ArticleCardBig from '../components/article-card-big';
import MainArticles from './main-articles';
import ProductCardSmall from '../components/product-card-small';
import Avatar from '../assets/images/avatarPlaceholder.png';
import ExpertInfo from './expert-info';
import Advice from '../components/advice';
import ExpertMovies from './expert-movies';
import ExpertArticles from './expert-articles';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';
import ProductCarousel from './product-carousel';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      expertVideos: [],
      expertArticles: [],
      title: '',
      content: [],
      allProducts: []
    };

    this.resolveDescription = this.resolveDescription.bind(this);
    this.shareFacebook = this.shareFacebook.bind(this);
    this.shareTwitter = this.shareTwitter.bind(this);
  }

  async componentDidMount() {
    const allObject = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const all = [];

    allObject.videos.forEach((element) => {
      if (element.snippet.title.indexOf('Wanda Baltaza') !== -1) {
        all.push(element);
      }
    });

    const products = [{ link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' },
      { link: '1050,daktarin-krem-15-g.html', name: 'Daktarin krem 15 g', price: '20,16', thumbnail: '/img/product/1050/kind/1' },
      { link: '21180,4-flex-30-saszetki-kolagen-nowej-generacji-witamina-c.html', name: '4 Flex 30 sasz.-zdrowe kości ,stawy,ścięgna', price: '77,70', thumbnail: '/img/product/21180/kind/1' },
      { link: '28063,4-lacti-20-kaps.html', name: '4 lacti 20 kaps.', price: '8,84', thumbnail: '/img/product/28063/kind/1' },
      { link: '42622,acai-berry-strong-90-tabletek.html', name: 'Acai Berry strong 90 tabletek', price: '24,99', thumbnail: '/img/product/42622/kind/1' }];

    const object = [
      { type: 'title', text: 'Czy istnieje skuteczna szczepionka na odporność? Czy można szczepić za pomocą doustnych granulek? Po jakie preparaty wzmacniające odporność możemy sięgnąć bez recepty? Oto porady eksperta allecco.pl.'},
      { type: 'paragraph', text: 'Szczepionka na odporność zawiera lizaty bakteryjne, czyli zabite komórki bakterii lub ich fragmenty. Mają one na celu aktywowanie naszego układu odpornościowego, stymulowanie jego komórek do pracy. Szczepionka wywołuje cały szereg reakcji w naszym organizmie, podobnych do tych, które mają miejsce kiedy dochodzi do prawdziwego zachorowania. Jednak w przypadku szczepionki, komórki odpornościowe uczą się radzić sobie z bakteriami, bez ryzyka wywołania choroby.'},
      { type: 'paragraph', text: 'Szczepionka na odporność silnie stymuluje układ immunologiczny i powoduje, że przy kolejnym kontakcie z żywymi bakteriami, organizm będzie umiał lepiej sobie poradzić. U osób, którym podano taką szczepionkę na odporność, zachorowania są rzadsze i mają łagodniejszy przebieg w porównaniu z osobami, które nie są szczepione.' },
      { type: 'title', text: 'Szczepionka na odporność dla dzieci i dla dorosłych' },
      { type: 'paragraph', text: 'Szczepionka na odporność polecana jest przede wszystkim dzieciom i innym osobom, które często cierpią na nawracające infekcje dróg oddechowych – choroby gardła, krtani, oskrzeli czy płuc. Jest dosyć bezpieczna i dobrze tolerowana nawet przez najmłodszych. Szczepionka na odporność dla dzieci i dla osób dorosłych dostępna jest tylko na podstawie recepty. Większość z nas kojarzy szczepionki głównie z zastrzykami, jednak szczepionka na odporność ma inną postać – kapsułek, granulatu, tabletek podjęzykowych lub kropli do nosa.'},
      { type: 'paragraph', text: 'Przykładowe szczepionki na odporność to Ismigen, Luivac, Ribomunyl i Broncho-Vaxom. Większość z nich może być stosowana u dzieci powyżej trzeciego roku życia. Wyjątkiem jest Broncho-Vaxom dla dzieci, który można podawać już od szóstego miesiąca. Sposób podawania każdego z wymienionych leków jest nieco inny. Przykładowo szczepionka na odporność dla dzieci Broncho-Vaxom może być stosowana profilaktycznie przez 10 kolejnych dni w miesiącu i ponownie w dwóch następnych miesiącach. Można ją też podawać dziecku wspomagająco, kiedy już doszło do infekcji dróg oddechowych, również przez okres 10 dni.'},
      { type: 'title', text: 'Jak zwiększyć odporność u dziecka i wspierać jego układ odpornościowy?'},
      { type: 'paragraph', text: 'O silny układ immunologiczny warto dbać cały rok za pomocą zdrowej diety i aktywnego stylu życia. Przed okresami o większej częstotliwości zachorowań na przeziębienie i grypę, warto pomyśleć również o preparatach na odporność. '},
      { type: 'paragraph', text: 'Wspomniane wyżej szczepionki dostępne są tylko po wizycie u lekarza, który może wypisać na nie receptę. Mamy jednak szeroki wybór środków wspierających układ immunologiczny bez recepty, stanowiących świetną alternatywę. Można je zastosować zarówno u dzieci, jak i u osób dorosłych.'}
    ];

    const articles = [{ link: '/blog/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/blog/3', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/4', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/5', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/6', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

    this.setState({ allProducts: products, allArticles: articles, expertVideos: all, expertArticles: articles, expert: 'Wanda Baltaza', title: 'Szczepionki na odporność - jak działają, czy są skuteczne?', content: object });
  }

  shareFacebook() {
    const facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
  }

  shareTwitter() {
    const twitterWindow = window.open('https://twitter.com/share?url=' + window.location.href, 'twitter-popup', 'height=350,width=600');
    if (twitterWindow.focus) { twitterWindow.focus(); }
    return false;
  }

  resolveDescription() {
    const tmp = [];
    this.state.content.forEach((element) => {
      if (element.type === 'title') {
        tmp.push(<Header size='huge' >{element.text}</Header>);
      } else if (element.type === 'paragraph') {
        tmp.push(<div className='paragraph' >{element.text}</div>);
      }
    });
    return tmp;
  }

  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPageContainer' >
          <div className='main' >
            <ArticleCardBig image={ArticlePlaceholder} />
            <div className='title' >
              <Header>{this.state.title}</Header>
                <div className='buttons' >
                  <Button className='facebook' onClick={this.shareFacebook} icon='facebook' />
                </div>
            </div>
            <div className='description' >
              {this.resolveDescription()}
            </div>
          </div>
          <Responsive minWidth='1021' >
            <div className='sidePanel' >
              <div className='center' >
                <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
                <Header>OSTATNIE ARTYKUŁY</Header>
                <div className='lastAM' >
                  {this.state.allArticles.slice(0, 2).map(article => <ArticleCard id='1' image={ArticlePlaceholder} article={article} />)}
                </div>
              </div>
              <div className='articleProductsContainer' >
                <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
                <Header className='articleHeader' >PRODUKTY Z ARTYKUŁU</Header>
                <div className='articleProducts' >
                  {this.state.allProducts.slice(0, 4).map(product => <ProductCardSmall contentClass='content' product={product} />)}
                </div>
              </div>
            </div>
          </Responsive>
        </div>
        <Responsive style={{ clear: 'both', marginBottom: '30px' }} maxWidth='1020' >
          <div className='whiteContainer doctorInfo' >
            <div className='background whiteHundred' />
            <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
            <Header className='mentionedProducts productHeader' textAlign='center' size='huge' >Produkty z artykułu</Header>
            <div className='articleProductsSmall' >
              {this.state.allProducts.slice(0, 4).map(product => <ProductCardSmall contentClass='content' product={product} />)}
            </div>
          </div>
        </Responsive>
        <ExpertInfo avatar={Avatar} expert={this.state.expert} />
        <Advice />
        <ExpertMovies expertVideos={this.state.expertVideos} />
        <ExpertArticles expertArticles={this.state.expertArticles} placeholder={ArticlePlaceholder} />
        <Responsive maxWidth='1020' >
          <MainArticles />
        </Responsive>
        <ProductCarousel />
      </div>
    );
  }
}

export default VideoPage;
