import React, { Component } from 'react';
import { Segment, Input, Button, Form, Header } from 'semantic-ui-react';
import axios from 'axios';

class Experts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      thumbnail: null,
      thumbnailName: '',
      playlist: '',
      idDelete: null
    };

    this.changeName = this.changeName.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
    this.changePlaylist = this.changePlaylist.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleIdDelete = this.handleIdDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeName(e, { value }) {
    this.setState({ name: value });
  }

  changeText(e, { value }) {
    this.setState({ text: value });
  }

  changeThumbnail(event) {
    const image = event.target.files.item(0);
    this.setState({ thumbnail: image, thumbnailName: image.name });
  }

  changePlaylist(e, { value }) {
    this.setState({ playlist: value });
  }

  handleClick() {
    if (this.state.name !== '' && this.state.text !== '' && this.state.thumbnail !== null && this.state.playlist !== '') {
      const tmp = this.state.thumbnail;

      const tmp2 = { name: this.state.name, text: this.state.text, thumbnailName: this.state.thumbnailName, playlist: this.state.playlist };
      console.log(tmp2);

      const data = new FormData();
      data.append('image', tmp, tmp.name);

      return axios.post('https://alleccocms.herokuapp.com/upload', data)
        .then((response) => {});
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
          <Input onChange={this.changeTitle} label='Imie i Nazwisko' />
          <Input onChange={this.changeText} label='Opis' />
          <Header>Zdjecie Eksperta</Header>
          <input className="form-control " type="file" onChange={this.changeThumbnail} multiple/>
          <Input onChange={this.changePlaylist} label='Id playlisty' />
          <div>
            <Button>Wyślij</Button>
          </div>
        </Form>
        <Segment>
          <Header>Ekspert do usuniecia</Header>
          <Input onChange={this.handleIdDelete} label='Id Eksperta' />
          <Button onClick={this.handleDelete} >OK</Button>
        </Segment>
      </Segment>
    );
  }
}

export default Experts;
