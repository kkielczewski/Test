import React from 'react';
import { Header } from 'semantic-ui-react';
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
    const articles = [{ link: '/blog/1', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', thumbnails: '' },
      { link: '/blog/2', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', thumbnails: '' },
      { link: '/blog/3', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet.', thumbnails: '' },
      { link: '/blog/4', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', thumbnails: '' },
      { link: '/blog/5', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', thumbnails: '' },
      { link: '/blog/6', title: 'Zamienniki leków - czy to to samo co ich oryginalne odpowiedniki?', description: 'Lorem ipsum dolor sit amet, consectetur.', thumbnails: '' }];

    this.setState({ allArticles: articles });
  }

  render() {  
    return (
      <div className='whiteContainer' >
        <div className='background whiteArticles' />
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts mainArticlesHeader' textAlign='center' size='huge' >Najnowsze Artykuły</Header>
        <div className='mainArticles' >
          {this.state.allArticles.slice(0, 4).map(article => <ArticleCard id='1' image={ArticlePlaceholder} article={article} />)}
        </div>
      </div>
    );
  }
}

export default MainArticles;
