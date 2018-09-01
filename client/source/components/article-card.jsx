import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ArticleCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.image} className={this.props.imageClass} />
        <Card.Content className={this.props.contentClass} >
          <Card.Header>{this.props.article.title}</Card.Header>
          <Card.Description>{this.props.article.description}</Card.Description>
        </Card.Content>
        <NavLink style={{ zIndex: '10', height: '100%', width: '100%', position: 'absolute' }} to={`/article/${this.props.id}`} />
      </Card>
    );
  }
}

export default ArticleCard;
