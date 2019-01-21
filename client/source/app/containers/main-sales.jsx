import React from 'react';
import { Header } from 'semantic-ui-react';
import Sale from '../components/sale';

class MainSales extends React.Component {
  render() {
    return (
      <div className='salesContainer' >
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts mainSalesHeader' textAlign='center' size='huge' >Nasze Promocje</Header>
        <div className='mainSales' >
          <Sale />
          <Sale />
          <Sale />
        </div>
      </div>
    );
  }
}

export default MainSales;
