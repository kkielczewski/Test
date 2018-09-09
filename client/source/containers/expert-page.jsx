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

    const articles = [{ link: '/article/1', title: '1', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/2', title: '2', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/3', title: '3', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/4', title: '4', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/5', title: '5', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/6', title: '6', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' },
      { link: '/article/7', title: '7', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/8', title: '8', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/9', title: '9', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/10', title: '10', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/11', title: '11', author: 'Wanda Baltaza', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/12', title: '12', author: 'Lucyna Malec', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

      const allArticles = [];

      articles.forEach((element) => {
        if (element.author.indexOf(this.state.name) !== -1) {
          allArticles.push(element);
        }
      });

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

    this.setState({ allProducts: products, expertArticles: allArticles, expertVideos: all });
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
          <div style={{ position: 'absolute', left: '0', bottom: '0', width: '100%'}} ><div className='pictureHeader' >{this.state.name}</div></div>
        </div>
        <div className='expertInfo'>
          <div className='expertDescription' >
            Opis filmu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className='doctorContainer' >
          <Header textAlign='center' size='huge' >Filmy eksperta</Header>
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
          <Header textAlign='center' size='huge' >Artykuły eksperta</Header>
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
        <Header className='recomendedProducts' textAlign='center' size='huge' >Polecane produkty</Header>
        <Slider {...productsSettings} >
          {this.state.allProducts.map(product => <ProductCard product={product} />)}
        </Slider>
      </div>
    );
  }
}

export default VideoPage;
