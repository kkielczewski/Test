import React from 'react';
import { Card, Image, Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ArticleCard extends React.Component {
  render() {
    return (
      <Card>
        <a draggable='false' href={`/article/${this.props.id}`} >
          <Image src={this.props.image} className={this.props.imageClass} />
          <Responsive minWidth='1025' style={{ height: '100%' }} >
            <div className='black'>
              <Card.Content className={this.props.contentClass} >
                <Card.Header>{this.props.article.title}</Card.Header>
              </Card.Content>
            </div>
          </Responsive>
          <Responsive maxWidth='1024' >
            <Card.Content className={this.props.contentClass} >
              <Card.Header>{this.props.article.title}</Card.Header>
            </Card.Content>
          </Responsive>
        </a>
      </Card>
    );
  }
}

export default ArticleCard;
