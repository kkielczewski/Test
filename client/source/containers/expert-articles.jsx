import React from 'react';
import { Header } from 'semantic-ui-react';
import ArticleCard from '../components/article-card';

class ExpertArticles extends React.Component {
  render() {
    return (
      <div className='whiteContainer' >
        <div className='background whiteArticles' />
        <Header className='recomendedProducts otherArticlesHeader' dividing textAlign='center' size='huge' >Inne artykuły experta</Header>
        <div className='mainArticles' >
          {this.props.expertArticles.slice(0, 4).map(article => <ArticleCard id='2' image={this.props.placeholder} article={article} />)}
        </div>
      </div>
    );
  }
}

export default ExpertArticles;
