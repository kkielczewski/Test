import React from 'react';
import { Header, Button, Image, Input, Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import { getSomeVideos } from '../utils/youtube-utils';
import VideoCard from '../components/video-card';
import ArticleCard from '../components/article-card';
import ArticleCardBig from '../components/article-card-big';
import ProductCard from '../components/product-card';
import ProductCardSmall from '../components/product-card-small';
import Avatar from '../assets/images/avatarPlaceholder.png';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      allArticles: [],
      expertVideos: [],
      expertArticles: [],
      title: '',
      content: []
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

    const object = [
      { type: 'title', text: 'Czy istnieje skuteczna szczepionka na odporność? Czy można szczepić za pomocą doustnych granulek? Po jakie preparaty wzmacniające odporność możemy sięgnąć bez recepty? Oto porady eksperta allecco.pl.'},
      { type: 'paragraph', text: 'Szczepionka na odporność zawiera lizaty bakteryjne, czyli zabite komórki bakterii lub ich fragmenty. Mają one na celu aktywowanie naszego układu odpornościowego, stymulowanie jego komórek do pracy. Szczepionka wywołuje cały szereg reakcji w naszym organizmie, podobnych do tych, które mają miejsce kiedy dochodzi do prawdziwego zachorowania. Jednak w przypadku szczepionki, komórki odpornościowe uczą się radzić sobie z bakteriami, bez ryzyka wywołania choroby.'},
      { type: 'paragraph', text: 'Szczepionka na odporność silnie stymuluje układ immunologiczny i powoduje, że przy kolejnym kontakcie z żywymi bakteriami, organizm będzie umiał lepiej sobie poradzić. U osób, którym podano taką szczepionkę na odporność, zachorowania są rzadsze i mają łagodniejszy przebieg w porównaniu z osobami, które nie są szczepione.' },
      { type: 'title', text: 'Szczepionka na odporność dla dzieci i dla dorosłych' },
      { type: 'paragraph', text: 'Szczepionka na odporność polecana jest przede wszystkim dzieciom i innym osobom, które często cierpią na nawracające infekcje dróg oddechowych – choroby gardła, krtani, oskrzeli czy płuc. Jest dosyć bezpieczna i dobrze tolerowana nawet przez najmłodszych. Szczepionka na odporność dla dzieci i dla osób dorosłych dostępna jest tylko na podstawie recepty. Większość z nas kojarzy szczepionki głównie z zastrzykami, jednak szczepionka na odporność ma inną postać – kapsułek, granulatu, tabletek podjęzykowych lub kropli do nosa.' }];

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

    const articles = [{ link: '/article/1', title: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/2', title: '2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/3', title: '3', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/4', title: '4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/5', title: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/6', title: '6', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

    this.setState({ allProducts: products, allArticles: articles, expertVideos: all, expertArticles: articles, expert: 'Wanda Baltaza', title: 'Tytuł', content: object });
  }

  shareFacebook() {
    const facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=' + this.state.id, 'facebook-popup', 'height=350,width=600');
    if (facebookWindow.focus) { facebookWindow.focus(); }
    return false;
  }

  shareTwitter() {
    const twitterWindow = window.open('https://twitter.com/share?url=https://www.youtube.com/watch?v=' + this.state.id, 'twitter-popup', 'height=350,width=600');
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
        <div className='videoPageContainer' >
          <div className='main' >
            <ArticleCardBig imageClass='videoImage' image={ArticlePlaceholder} />
            <div className='title' >
              <Header>{this.state.title}</Header>
            </div>
            <div className='description' >
              {this.resolveDescription()}
            </div>
          </div>
          <div className='sidePanel' >
            <div className='center' >
              <Header>OSTATNIE ARTYKUŁY</Header>
              <div className='lastAM' >
                {this.state.allArticles.slice(0, 3).map(article => <ArticleCard id='1' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
              </div>
              <Header>UDOSTĘPNIJ</Header>
              <div className='social' >
                <Button onClick={this.shareFacebook} color='facebook' icon='facebook' />
                <Button onClick={this.shareTwitter} color='twitter' icon='twitter' />
              </div>
              <Header>PRODUKTY WSPOMNIANE W ARTYKULE</Header>
              <div className='articleProducts' >
                {this.state.allProducts.slice(0, 5).map(product => <ProductCardSmall imageClass='Image' contentClass='content' product={product} />)}
              </div>
            </div>
          </div>
        </div>
        <div style={{ clear: 'both', marginBottom: '30px' }} >
        <div className='expertContainer' >
          <div className='imageContainer' >
            <Image src={Avatar} className='expertImage' />
          </div>
          <div className='details' >
            <Header>{this.state.expert}</Header>
            <div className='description' >KILKA SLOW O EKSPERCIE Opis filmu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
        </div>
        </div>
        <div className='advice' >
          <Header textAlign='center' size='huge' >Co chciałbyś zobaczyć w następnym artykule tego eksperta?</Header>
          <Input size='massive' placeholder='...' />
        </div>
        <div className='otherMovies' >
          <Header textAlign='center' size='huge' >Inne filmy experta:</Header>
          <Responsive minWidth={2171} >
            <div className='mainMovies' >
            {this.state.expertVideos.slice(0, 4).map(video => <VideoCard imageClass='listImage' contentClass='listContent' video={video} />)}
            </div>
          </Responsive>
          <Responsive minWidth={1021} maxWidth={2170} >
            <div className='mainMovies' >
            {this.state.expertVideos.slice(0, 3).map(video => <VideoCard imageClass='listImage' contentClass='listContent' video={video} />)}
            </div>
          </Responsive>
          <Responsive minWidth={761} maxWidth={1020} >
            <div className='mainMovies' >
            {this.state.expertVideos.slice(0, 4).map(video => <VideoCard imageClass='listImage' contentClass='listContent' video={video} />)}
            </div>
          </Responsive>
          <Responsive maxWidth={760} >
            <div className='mainMovies' >
            {this.state.expertVideos.slice(0, 4).map(video => <VideoCard imageClass='listImage' contentClass='listContent' video={video} />)}
            </div>
          </Responsive>
        </div>
        <div className='otherMovies' >
          <Header textAlign='center' size='huge' >Inne artykuły experta:</Header>
          <Responsive minWidth={2171} >
            <div className='otherArticles' >
            {this.state.expertArticles.slice(0, 4).map(article => <ArticleCard id='2' contentClass='articleContent' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
            </div>
          </Responsive>
          <Responsive minWidth={1021} maxWidth={2170} >
            <div className='otherArticles' >
            {this.state.expertArticles.slice(0, 3).map(article => <ArticleCard id='2' contentClass='articleContent' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
            </div>
          </Responsive>
          <Responsive minWidth={761} maxWidth={1020} >
            <div className='otherArticles' >
            {this.state.expertArticles.slice(0, 4).map(article => <ArticleCard id='2' contentClass='articleContent' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
            </div>
          </Responsive>
          <Responsive maxWidth={760} >
            <div className='otherArticles' >
            {this.state.expertArticles.slice(0, 4).map(article => <ArticleCard id='2' contentClass='articleContent' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
            </div>
          </Responsive>
        </div>
        <Header className='recomendedProducts' textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default VideoPage;
