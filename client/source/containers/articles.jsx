import React from 'react';
import MoviesPlaceholder from '../assets/images/movies-placeholder.png';
import ArticlesList from './article-list';
import MainMovies from './main-movies';
import ProductCarousel from './product-carousel';


class Articles extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <div className='videoPicture' style={{ position: 'relative', width: '100%', overflow: 'hidden', background: `url(${MoviesPlaceholder}) no-repeat center` }} />
        <ArticlesList />
        <MainMovies />
        <ProductCarousel />
      </div>
    );
  }
}

export default Articles;
