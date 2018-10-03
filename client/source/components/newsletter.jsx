import React from 'react';
import { Segment, Header, Input, Button, Checkbox, Form } from 'semantic-ui-react';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstCheck: false,
      secondCheck: false
    }
    this.changeCheckOne = this.changeCheckOne.bind(this);
    this.changeCheckTwo = this.changeCheckTwo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  changeCheckOne(e, { value }) {
    this.setState({ firstCheck: value });
  }

  changeCheckTwo(e, { value }) {
    this.setState({ secondCheck: value });
  }

  changeEmail(e, { value }) {
    this.setState({ email: value });
  }

  handleClick() {
    if (this.validateEmail(this.state.email)) {
      if (this.state.firstCheck && this.state.secondCheck) {
        console.log('Przeszło.');
      } else {
        console.log('Zaakceptuj regulamin i coś tam.');
      }
    } else {
      console.log('Niepoprawny email');
    }
  }

  render() {
    return (
      <Segment className='newsletter' raised textAlign='center'>
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header textAlign='center' size='medium' >Zapisz się do newslettera</Header>
        <div className='paragraph' >Twórz serwis Allecco.tv razem z nami. Weż udział w ankiecie i zdecyduj jakie treści przygotują nasi eksperci. Wpisz swój adres email i odbierz ankiete:</div>
        <Form onSubmit={this.handleClick} >
        <Input onChange={this.changeEmail} placeholder='Email...' />
        <Checkbox value={true} onChange={this.changeCheckOne} label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also." />
        <Checkbox value={true} onChange={this.changeCheckTwo} label="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-orless normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their." />
        <div>
          <Button >Zapisz</Button>
        </div>
        </Form>
      </Segment>
    );
  }
}

export default Newsletter;
