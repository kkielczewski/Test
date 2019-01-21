import React from 'react';
import MainContest from './main-contest';
import ContestWinners from './contest-winners';
import FbInContests from './fb-in-contests';
import MainMovies from './main-movies';
import ProductCarousel from './product-carousel';

class Contests extends React.Component {
  render() {
    return (
      <div className='mainContainer' >
        <div className='blueStripe' />
        <MainContest />
        <MainContest />
        <ContestWinners />
        <FbInContests />
        <MainMovies />
        <ProductCarousel />
      </div>
    );
  }
}

export default Contests;
