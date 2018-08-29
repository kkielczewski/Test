import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ArticlePlaceholder from '../assets/images/article-placeholder.png';

class ArticleCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.image} className={this.props.imageClass} />
        <Card.Content className={this.props.contentClass} >
          <Card.Header>{this.props.article.title}</Card.Header>
          <Card.Description>{this.props.article.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ArticleCard;
