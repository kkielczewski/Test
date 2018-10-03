import React from 'react';
import { Header } from 'semantic-ui-react';
import Default from '../assets/images/default.jpg';

class ContactDescription extends React.Component {

  render() {
    return (
      <div className='infoDescriptionContainer' >
        <div className='whiteContainer' >
          <div className='background whiteFull' />
          <div className='description' >
            <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
            <Header className='recomendedProducts contactHeader' textAlign='center' size='huge' >Kontakt</Header>
            <img src={Default} />
            <div className='text' >
            <p className='title' >BIURO OBSŁUGI KLIENTA</p>
            <p>Informacje na temat dostępności produktów oraz statusu realizacji zamówień udzielane są przez naszych pracowników od poniedziałku do piątku w godzinach od 8:00 do 16:00. W  przypadku pytań prosimy o kontakt telefoniczny lub mailowy.</p>
            <p>infolinia: <b>801 889 885</b></p> 
            <p>tel. <b>32 744 35 62</b> ( z telefonów komórkowych)</p>
            <p>wg stawki twojego operatora</p>
            <p>e-mail: <b>info@allecco.pl</b></p>
            <p>Administratorem serwisu allecco.pl jest MEDICARE-GALENICA Sp. z o.o. z siedzibą przy ulicy Białobrzeskiej 45 w Mysłowicach, NIP 954-21-84-194, KRS 0000066774 (Sąd Rejonowy Katowice - Wschód w Katowicach; Wydział VIII  Gospodarczy Krajowego Rejestru Sądowego) </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDescription;
