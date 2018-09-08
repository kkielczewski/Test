import React from 'react';
import { Segment, Header, Input, Button } from 'semantic-ui-react';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.changeEmail = this.changeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  changeEmail(e, { value }) {
    this.setState({ email: value });
  }

  handleClick() {
    if(this.validateEmail(this.state.email)) {
      console.log('Przeszło.');
    } else {
      console.log('Niepoprawny email');
    }
  }

  render() {
    return (
      <div className='survey' >
        <div className='surveySegment' >
        <Segment raised textAlign='center'>
          <Header textAlign='center' size='huge' >ANKIETA</Header>
          <div className='paragraph' >Twórz serwis Allecco.tv razem z nami. Weź udział w ankiecie i zdecyduj jakie treści przygotują nasi eksperci. Wpisz swój adres e-mail i odbierz ankiete:</div>
          <Input onChange={this.changeEmail} placeholder='Email...' />
          <div>
            <Button onClick={this.handleClick} color='red' >Wyślij</Button>
          </div>
        </Segment>
        </div>
      </div>
    );
  }
}

export default Survey;
