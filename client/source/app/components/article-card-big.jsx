import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class ArticleCardBig extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.image} className={this.props.imageClass} />
      </Card>
    );
  }
}

export default ArticleCardBig;
