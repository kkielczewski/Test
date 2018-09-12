import React from 'react';
import { Segment, Header, Input, Button, Form } from 'semantic-ui-react';

class Advice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.changeText = this.changeText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeText(e, { value }) {
    this.setState({ text: value });
  }

  handleClick() {
    if (this.state.text) {
      console.log('Przeszło.');
    } else {
      console.log('Zostawiłeś puste pole.');
    }
  }

  render() {
    return (
      <Segment className='advice' textAlign='center'>
        <Header textAlign='center' size='medium' >Co chciałbyś zobaczyć w następnym filmie lub artykule tego eksperta?</Header>
        <Form onSubmit={this.handleClick} >
          <Input onChange={this.changeText} placeholder='...' />
          <Button color='red' >Wyślij</Button>
        </Form>
      </Segment>
    );
  }
}

export default Advice;
