import React from 'react';
import { Segment, Header, Input, Button, Checkbox } from 'semantic-ui-react';

class Newsletter extends React.Component {
  render() {
    return (
      <Segment className='newsletter' raised textAlign='center'>
        <Header textAlign='center' size='medium' >Zapisz się do newslettera</Header>
        <div className='paragraph' >Twórz serwis Allecco.tv razem z nami. Weż udział w ankiecie i zdecyduj jakie treści przygotują nasi eksperci. Wpisz swój adres e-mail i odbierz ankiete:</div>
        <Input placeholder='Email...' />
        <Checkbox label="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also." />
        <Checkbox label="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-orless normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their." />
        <div>
          <Button color='red' >Zapisz</Button>
        </div>
      </Segment>
    );
  }
}

export default Newsletter;
