import React, { Component } from 'react';
import { Segment, Input, Button, Form, Header } from 'semantic-ui-react';

class Contests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      winner: '',
      youtube: '',
      idDelete: null
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeWinner = this.changeWinner.bind(this);
    this.changeYoutbe = this.changeYoutube.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleIdDelete = this.handleIdDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeTitle(e, { value }) {
    this.setState({ title: value });
  }

  changeWinner(e, { value }) {
    this.setState({ winner: value });
  }

  changeYoutube(e, { value }) {
    this.setState({ youtube: value });
  }

  handleClick() {
    if (this.state.title !== '' && this.state.text !== '' && this.state.youtube !== '' && this.state.playlist !== '') {
      const tmp = this.state.thumbnail;

      const tmp2 = { title: this.state.title, text: this.state.text, youtube: this.state.youtube, playlist: this.state.playlist };
      console.log(tmp2);
    }
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
          <Input onChange={this.changeTitle} label='Tytuł Konkursu' />
          <Input onChange={this.changeWinner} label='Zwyciezca Konkursu' />
          <Input onChange={this.changeYoutube} label='Youtube Link' />
          <div>
            <Button>Wyślij</Button>
          </div>
        </Form>
        <Segment>
          <Header>Konkurs do usuniecia</Header>
          <Input onChange={this.handleIdDelete} label='Id Zwyciezcy' />
          <Button onClick={this.handleDelete} >OK</Button>
        </Segment>
      </Segment>
    );
  }
}

export default Contests;
