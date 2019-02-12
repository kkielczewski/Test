import React from 'react';
import { Header } from 'semantic-ui-react';
import Alerbon from '../assets/products/allergy/alerbon.jpg';
import Sale from '../components/sale';

class MainSales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSales: []
    };
  }

  async componentDidMount() {
    const objects = [{ link: 'allecco.pl', thumbnail: Alerbon },
      { link: 'allecco.pl', thumbnail: Alerbon },
      { link: 'allecco.pl', thumbnail: Alerbon }];

    this.setState({ allSales: objects });
  }

  render() {
    return (
      <div className='salesContainer' >
        <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
        <Header className='recomendedProducts mainSalesHeader' textAlign='center' size='huge' >Nasze Promocje</Header>
        <div className='mainSales' >
          {this.state.allSales.map(sale => <Sale sale={sale} />)}
        </div>
      </div>
    );
  }
}

export default MainSales;
