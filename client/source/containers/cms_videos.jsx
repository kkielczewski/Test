import React, { Component } from 'react';
import { Segment, Input, Button, Form, Header } from 'semantic-ui-react';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      text: '',
      idDelete: null
    };

    this.changeLink = this.changeLink.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleIdDelete = this.handleIdDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeLink(e, { value }) {
    this.setState({ link: value });
  }

  changeText(e, { value }) {
    this.setState({ text: value });
  }

  handleClick() {
    if (this.state.link !== '' && this.state.text !== '') {
      const tmp = { link: this.state.link, text: this.state.text };
      console.log(tmp);
    }
    return -1;
  }

  handleIdDelete(e, { value }) {
    this.setState({ idDelete: value });
  }

  handleDelete() {
    console.log(this.state.idDelete);
  }

  render() {
    return (
      <Segment className='articles' raised textAlign='center'>
        <Form onSubmit={this.handleClick} >
          <Input onChange={this.changeTitle} label='Link' />
          <Input onChange={this.changeText} label='Opis' />
          <div>
            <Button>Wyślij</Button>
          </div>
        </Form>
        <Segment>
          <Header>Video do usuniecia</Header>
          <Input onChange={this.handleIdDelete} label='Id Video' />
          <Button onClick={this.handleDelete} >OK</Button>
        </Segment>
      </Segment>
    );
  }
}

export default Videos;
