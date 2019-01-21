import React, { Component } from 'react';
import { Segment, Input, Button, Header } from 'semantic-ui-react';
import axios from 'axios';

class Homecontests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeLink: '',
      insta1: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      },
      insta2: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      },
      facebook1: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      },
      facebook2: {
        link: '',
        thumbnailName: '',
        thumbnail: null
      }
    };

    this.changeYoutube = this.changeYoutube.bind(this);
    this.changeInsta1 = this.changeInsta1.bind(this);
    this.changeInsta1File = this.changeInsta1File.bind(this);
    this.changeInsta2 = this.changeInsta2.bind(this);
    this.changeInsta2File = this.changeInsta2File.bind(this);
    this.changeFacebook1 = this.changeFacebook1.bind(this);
    this.changeFacebook1File = this.changeFacebook1File.bind(this);
    this.changeFacebook2 = this.changeFacebook2.bind(this);
    this.changeFacebook2File = this.changeFacebook2File.bind(this);
    this.handleClickYoutube = this.handleClickYoutube.bind(this);
    this.handleClickInsta1 = this.handleClickInsta1.bind(this);
    this.handleClickInsta2 = this.handleClickInsta2.bind(this);
    this.handleClickFacebook1 = this.handleClickFacebook1.bind(this);
    this.handleClickFacebook2 = this.handleClickFacebook2.bind(this);
  }

  changeYoutube(e, { value }) {
    this.setState({ youtubeLink: value });
  }

  changeInsta1(e, { value }) {
    this.setState({ insta1: { link: value, thumbnailName: this.state.insta1.thumbnailName, thumbnail: this.state.insta1.thumbnail } });
  }

  changeInsta1File(event) {
    const image = event.target.files.item(0);
    this.setState({ insta1: { link: this.state.insta1.link, thumbnailName: image.name, thumbnail: image } });
  }

  changeInsta2(e, { value }) {
    this.setState({ insta2: { link: value, thumbnailName: this.state.insta2.thumbnailName, thumbnail: this.state.insta2.thumbnail } });
  }

  changeInsta2File(event) {
    const image = event.target.files.item(0);
    this.setState({ insta2: { link: this.state.insta2.link, thumbnailName: image.name, thumbnail: image } });
  }

  changeFacebook1(e, { value }) {
    this.setState({ facebook1: { link: value, thumbnailName: this.state.facebook1.thumbnailName, thumbnail: this.state.facebook1.thumbnail } });
  }

  changeFacebook1File(event) {
    const image = event.target.files.item(0);
    this.setState({ facebook1: { link: this.state.facebook1.link, thumbnailName: image.name, thumbnail: image } });
  }

  changeFacebook2(e, { value }) {
    this.setState({ facebook2: { link: value, thumbnailName: this.state.facebook2.thumbnailName, thumbnail: this.state.facebook2.thumbnail } });
  }

  changeFacebook2File(event) {
    const image = event.target.files.item(0);
    this.setState({ facebook2: { link: this.state.facebook2.link, thumbnailName: image.name, thumbnail: image } });
  }

  handleClickYoutube() {
    if (this.state.youtubeLink !== '') {
      const tmp = { link: this.state.youtubeLink };
      console.log(tmp);
    }
  }

  handleClickInsta1() {
    if (this.state.insta1.thumbnail !== null && this.state.insta1.link !== '') {
      const tmp = this.state.insta1.thumbnail;
      const data = new FormData();
      data.append('image', tmp, tmp.name);

      const tmp2 = { link: this.state.insta1.link, thumbnailName: this.state.insta1.thumbnailName };
      console.log(tmp2);

      return axios.post('https://alleccocms.herokuapp.com/upload', data)
        .then((response) => {});
    }
    return -1;
  }

  handleClickInsta2() {
    if (this.state.insta2.thumbnail !== null && this.state.insta2.link !== '') {
      const tmp = this.state.insta2.thumbnail;
      const data = new FormData();
      data.append('image', tmp, tmp.name);

      const tmp2 = { link: this.state.insta2.link, thumbnailName: this.state.insta2.thumbnailName };
      console.log(tmp2);

      return axios.post('https://alleccocms.herokuapp.com/upload', data)
        .then((response) => {});
    }
    return -1;
  }

  handleClickFacebook1() {
    if (this.state.facebook1.thumbnail !== null && this.state.facebook1.link !== '') {
      const tmp = this.state.facebook1.thumbnail;
      const data = new FormData();
      data.append('image', tmp, tmp.name);

      const tmp2 = { link: this.state.facebook1.link, thumbnailName: this.state.facebook1.thumbnailName };
      console.log(tmp2);

      return axios.post('https://alleccocms.herokuapp.com/upload', data)
        .then((response) => {});
    }
    return -1;
  }

  handleClickFacebook2() {
    if (this.state.facebook2.thumbnail !== null && this.state.facebook2.link !== '') {
      const tmp = this.state.facebook2.thumbnail;
      const data = new FormData();
      data.append('image', tmp, tmp.name);

      const tmp2 = { link: this.state.facebook2.link, thumbnailName: this.state.facebook2.thumbnailName };
      console.log(tmp2);

      return axios.post('https://alleccocms.herokuapp.com/upload', data)
        .then((response) => {});
    }
    return -1;
  }

  render() {
    return (
      <Segment className='homeContests' raised textAlign='center'>
        <Segment raised textAlign='center' >
          <Header>Link do filmu z konkursem</Header>
          <Input onChange={this.changeYoutube} label='Youtube link' />
          <Button onClick={this.handleClickYoutube} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Pierwszy konkurs na Instagramie</Header>
          <Input onChange={this.changeInsta1} label='Link do konkursu' />
          <Header>Zdjecie konkursu</Header>
          <input className="form-control " type="file" onChange={this.changeInsta1File} multiple/>
          <Button onClick={this.handleClickInsta1} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Drugi konkurs na Instagramie</Header>
          <Input onChange={this.changeInsta2} label='Link do konkursu' />
          <Header>Zdjecie konkursu</Header>
          <input className="form-control " type="file" onChange={this.changeInsta2File} multiple/>
          <Button onClick={this.handleClickInsta2} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Pierwszy konkurs na Facebooku</Header>
          <Input onChange={this.changeFacebook1} label='Link do konkursu' />
          <Header>Zdjecie konkursu</Header>
          <input className="form-control " type="file" onChange={this.changeFacebook1File} multiple/>
          <Button onClick={this.handleClickFacebook1} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Drugi konkurs na Facebooku</Header>
          <Input onChange={this.changeFacebook2} label='Link do konkursu' />
          <Header>Zdjecie konkursu</Header>
          <input className="form-control " type="file" onChange={this.changeFacebook2File} multiple/>
          <Button onClick={this.handleClickFacebook2} >Update</Button>
        </Segment>
      </Segment>
    );
  }
}

// extended main view with translate hoc
export default Homecontests;
