import React from 'react';
import { Segment, Header, TextArea, Button, Form } from 'semantic-ui-react';
import toastr from 'toastr';

class Advice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      disabled: false
    };
    this.changeText = this.changeText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeText(e, { value }) {
    this.setState({ text: value });
  }

  handleClick() {
    if (this.state.text) {
      toastr.info('Dziękujemy za informacje.');
      this.setState({ disabled: true });
    } else {
      console.log('Zostawiłeś puste pole.');
    }
  }

  render() {
    return (
      <Segment className='advice' textAlign='center'>
        <Header textAlign='center' size='medium' >
          <p>Co chciałbyś zobaczyć</p>
          <p>w następnym filmie lub artykule tego</p>
          <p><b>eksperta?</b></p>
          </Header>
        <Form onSubmit={this.handleClick} >
          <TextArea onChange={this.changeText} placeholder='...' />
          <Button disabled={this.state.disabled} >Wyślij</Button>
        </Form>
      </Segment>
    );
  }
}

export default Advice;
