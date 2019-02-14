import React, { Component } from 'react';
import { Segment, Input, Button, Form, Header } from 'semantic-ui-react';
import axios from 'axios';

class OurContests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facebookLink1: '',
      facebookLink2: '',
      instagramLink1: '',
      instagramLink2: ''
    };

    this.changeFacebook1 = this.changeFacebook1.bind(this);
    this.changeFacebook2 = this.changeFacebook2.bind(this);
    this.changeInstagram1 = this.changeInstagram1.bind(this);
    this.changeInstagram2 = this.changeInstagram2.bind(this);
    this.handleClickFace1 = this.handleClickFace1.bind(this);
    this.handleClickFace2 = this.handleClickFace2.bind(this);
    this.handleClickInsta1 = this.handleClickInsta1.bind(this);
    this.handleClickInsta2 = this.handleClickInsta2.bind(this);
  }

  changeFacebook1(e, { value }) {
    this.setState({ facebookLink1: value });
  }

  changeFacebook2(e, { value }) {
    this.setState({ facebookLink2: value });
  }

  changeInstagram1(e, { value }) {
    this.setState({ instagramLink1: value });
  }

  changeInstagram2(e, { value }) {
    this.setState({ instagramLink2: value });
  }

  handleClickFace1() {
    if (this.state.facebookLink1 !== '') {
      const tmp = { link: this.state.facebookLink1 };
      console.log(tmp);
    }
  }

  handleClickFace2() {
    if (this.state.facebookLink2 !== '') {
      const tmp = { link: this.state.facebookLink2 };
      console.log(tmp);
    }
  }

  handleClickInsta1() {
    if (this.state.instagramLink1 !== '') {
      const tmp = { link: this.state.instagramLink1 };
      console.log(tmp);
    }
  }

  handleClickInsta2() {
    if (this.state.instagramLink2 !== '') {
      const tmp = { link: this.state.instagramLink2 };
      console.log(tmp);
    }
  }

  render() {
    return (
      <Segment className='articles' raised textAlign='center'>
        <Segment raised textAlign='center' >
          <Header>Pierwszy konkurs facebook</Header>
          <Input onChange={this.changeFacebook1} label='np. https://www.facebook.com/Allecco/posts/2069247059792412' />
          <Button onClick={this.handleClickFace1} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Drugi konkurs facebook</Header>
          <Input onChange={this.changeFacebook2} label='np. https://www.facebook.com/Allecco/posts/2069247059792412' />
          <Button onClick={this.handleClickFace2} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Pierwszy konkurs instagram</Header>
          <Input onChange={this.changeInstagram1} label='np. https://instagr.am/p/BoRICjtFK6e/' />
          <Button onClick={this.handleClickInsta1} >Update</Button>
        </Segment>
        <Segment raised textAlign='center' >
          <Header>Drugi konkurs instagram</Header>
          <Input onChange={this.changeInstagram2} label='np. https://instagr.am/p/BoRICjtFK6e/' />
          <Button onClick={this.handleClickInsta2} >Update</Button>
        </Segment>
      </Segment>
    );
  }
}

export default OurContests;
