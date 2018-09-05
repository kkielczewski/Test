import React from 'react';
import ArticleCard from '../components/article-card';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';

class MainArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: []
    };
  }

  async componentDidMount() {
    const articles = [{ link: '/article/1', title: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/article/2', title: '2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/article/3', title: '3', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/article/4', title: '4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/article/5', title: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/article/6', title: '6', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

    this.setState({ allArticles: articles });
  }

  render() {  
    return (
      <div className='mainArticlesContainer' >
        <div className='mainArticles' >
          {this.state.allArticles.slice(0, 6).map(article => <ArticleCard id='1' className='articleCard mainArticleCard' imageClass='Image' image={ArticlePlaceholder} article={article} />)}
        </div>
      </div>
    );
  }
}

export default MainArticles;
