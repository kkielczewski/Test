import React from 'react';
import { Segment, Header, Input, Button } from 'semantic-ui-react';

class Survey extends React.Component {
  render() {
    return (
      <div className='survey' >
        <div className='surveySegment' >
        <Segment raised textAlign='center'>
          <Header textAlign='center' size='huge' >ANKIETA</Header>
          <div className='paragraph' >Twórz serwis Allecco.tv razem z nami. Weź udział w ankiecie i zdecyduj jakie treści przygotują nasi eksperci. Wpisz swój adres e-mail i odbierz ankiete:</div>
          <Input placeholder='Email...' />
          <div>
            <Button color='red' >Wyślij</Button>
          </div>
        </Segment>
        </div>
      </div>
    );
  }
}

export default Survey;
