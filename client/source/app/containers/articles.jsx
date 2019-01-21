import React from 'react';
import ArticlesList from './article-list';
import MainMovies from './main-movies';
import ProductCarousel from './product-carousel';


class Articles extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' ></div>
        <ArticlesList />
        <MainMovies />
        <ProductCarousel />
      </div>
    );
  }
}

export default Articles;
