import React from 'react';
import { Header, Input, Responsive, Segment } from 'semantic-ui-react';
import Slider from 'react-slick';
import VideoCard from '../components/video-card';
import VideoCardBig from '../components/video-card-big';
import ArticleCard from '../components/article-card';
import ProductCard from '../components/product-card';
import Advice from '../components/advice';
import { getSomeVideos } from '../utils/youtube-utils';
import Avatar from '../assets/images/avatarPlaceholder.png';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      expertArticles: [],
      expertVideos: [],
      name: 'Wanda Baltaza'
    };
  }

  async componentDidMount() {
    const allObject = await getSomeVideos('UUlYlNvdBOuwuQZrCle9BrcA');

    const all = [];

    allObject.videos.forEach((element) => {
      if (element.snippet.title.indexOf(this.state.name) !== -1) {
        all.push(element);
        all.push(element);
        all.push(element);
      }
    });

    const articles = [{ link: '/article/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/3', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/4', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/5', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/6', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' },
      { link: '/article/7', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/8', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/9', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/10', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/11', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/12', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

    const allArticles = [];

    articles.forEach((element) => {
      if (element.author.indexOf(this.state.name) !== -1) {
        allArticles.push(element);
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

    this.setState({ allProducts: products, expertArticles: allArticles, expertVideos: all });
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
          <div style={{ position: 'absolute', left: '0', bottom: '0', width: '100%'}} ><div className='pictureHeader' >{this.state.name}</div></div>
        </div>
        <div className='expertInfo'>
          <div className='expertDescription' >
            Opis filmu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className='doctorContainer' >
          <Header className='recomendedProducts' dividing textAlign='center' size='huge' >Filmy eksperta</Header>
          <Responsive minWidth={1021} >
            <div className='expertMovieList' >
            {this.state.expertVideos.slice(0, 9).map(video => <VideoCard imageClass='Image' contentClass='listContent' video={video} />)}
            </div>
          </Responsive>
          <Responsive maxWidth={1020} >
            <div className='expertMovieList' >
            {this.state.expertVideos.slice(0, 8).map(video => <VideoCard imageClass='Image' contentClass='listContent' video={video} />)}
            </div>
          </Responsive>
        </div>
        <Advice />
        <div className='doctorContainerArticles' >
          <Header className='recomendedProducts' dividing textAlign='center' size='huge' >Artykuły eksperta</Header>
          <Responsive minWidth={1021} >
            <div className='expertArticleList' >
            {this.state.expertArticles.slice(0, 9).map(article => <ArticleCard id='1' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
            </div>
          </Responsive>
          <Responsive maxWidth={1020} >
            <div className='expertArticleList' >
            {this.state.expertArticles.slice(0, 8).map(article => <ArticleCard id='1' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
            </div>
          </Responsive>
        </div>
        <Header dividing className='recomendedProducts' textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default VideoPage;
