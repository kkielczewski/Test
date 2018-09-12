import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ArticleCard extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`/article/${this.props.id}`} >
          <Image src={this.props.image} className={this.props.imageClass} />
          <Card.Content className={this.props.contentClass} >
            <Card.Header>{this.props.article.title}</Card.Header>
          </Card.Content>
        </a>
      </Card>
    );
  }
}

export default ArticleCard;
