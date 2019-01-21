import React, { Component } from 'react';
import { Segment, Input, Button, Form, Header } from 'semantic-ui-react';
import axios from 'axios';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      thumbnail: null,
      thumbnailName: '',
      photo: null,
      photoName: '',
      products: '',
      expertId: null,
      idDelete: null
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.changeThumbnail = this.changeThumbnail.bind(this);
    this.changePhoto = this.changePhoto.bind(this);
    this.changeProducts = this.changeProducts.bind(this);
    this.changeExpert = this.changeExpert.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleIdDelete = this.handleIdDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeTitle(e, { value }) {
    this.setState({ title: value });
  }

  changeText(e, { value }) {
    this.setState({ text: value });
  }

  changeThumbnail(event) {
    const image = event.target.files.item(0);
    this.setState({ thumbnail: image, thumbnailName: image.name });
  }

  changePhoto(event) {
    const image = event.target.files.item(0);
    this.setState({ photo: image, photoName: image.name });
  }

  changeProducts(e, { value }) {
    this.setState({ products: value });
  }

  changeExpert(e, { value }) {
    this.setState({ expertId: value });
  }

  handleClick() {
    if (this.state.title !== '' && this.state.text !== '' && this.state.thumbnail !== null && this.state.photo !== null && this.state.products !== '' && this.state.expertId !== null) {
      const tmp = [];
      tmp.push(this.state.thumbnail);
      tmp.push(this.state.photo);

      const tmp2 = { title: this.state.title, text: this.state.text, thumbnailName: this.state.thumbnailName, photoName: this.state.photoName, products: this.state.products, expertId: this.state.expertId };
      console.log(tmp2);
      
      const uploaders = tmp.map((image) => {
        const data = new FormData();
        data.append('image', image, image.name);

        return axios.post('https://alleccocms.herokuapp.com/upload', data)
          .then((response) => {});
      });
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
          <Input onChange={this.changeTitle} label='Tytuł' />
          <Input onChange={this.changeText} label='HTML Text' />
          <Header>Pionowy thumbnail</Header>
          <input className="form-control " type="file" onChange={this.changeThumbnail} multiple/>
          <Header>Zdjecie artykułu</Header>
          <input className="form-control " type="file" onChange={this.changePhoto} multiple/>
          <Input onChange={this.changeProducts} label='Id produktów' placeholder='po przecinku np. 1,4,6,123,2' />
          <Input onChange={this.changeExpert} label='Id experta' />
          <div>
            <Button>Wyślij</Button>
          </div>
        </Form>
        <Segment>
          <Header>Artykuł do usuniecia</Header>
          <Input onChange={this.handleIdDelete} label='Id Artykułu' />
          <Button onClick={this.handleDelete} >OK</Button>
        </Segment>
      </Segment>
    );
  }
}

export default Articles;
