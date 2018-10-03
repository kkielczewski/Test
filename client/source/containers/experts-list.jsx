import React from 'react';
import { Header } from 'semantic-ui-react';
import Pagination from 'react-js-pagination';
import DoctorCard from '../components/doctor-card';

class ExpertsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allExperts: [],
      currentExperts: [],
      activePage: 1,
      totalCount: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    const doctors = [{ link: '/expert/1', thumbnail: '' },
      { link: '/expert/2', thumbnail: '' },
      { link: '/expert/3', thumbnail: '' },
      { link: '/expert/4', thumbnail: '' },
      { link: '/expert/5', thumbnail: '' },
      { link: '/expert/6', thumbnail: '' },
      { link: '/expert/7', thumbnail: '' },
      { link: '/expert/8', thumbnail: '' },
      { link: '/expert/9', thumbnail: '' },
      { link: '/expert/10', thumbnail: '' },
      { link: '/expert/11', thumbnail: '' },
      { link: '/expert/12', thumbnail: '' },
      { link: '/expert/13', thumbnail: '' },
      { link: '/expert/14', thumbnail: '' }];

    this.setState({ allExperts: doctors, currentExperts: doctors.slice(0, 12), totalCount: 14 });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 12;
    const currentItems = this.state.allExperts.slice(offset, offset + 12);
    this.setState({ activePage: pageNumber, currentExperts: currentItems });
  }

  render() {
    return (
      <div className='doctorsContainer' >
        <div className='whiteContainer whiteFull' >
          <div className='redLine' ><div className='leftDot'/><div className='rightDot'/></div>
          <div className='doctorList' >
          <Header className='recomendedProducts expertsHeader' textAlign='center' size='huge' >Eksperci</Header>
            {this.state.currentExperts.map(expert => <DoctorCard link={expert.link} />)}
            <div className='doctorNav' >
              <Pagination
              hideFirstLastPages
              activePage={this.state.activePage}
              itemsCountPerPage={12}
              totalItemsCount={this.state.totalCount}
              pageRangeDisplayed={5}
              activeClass="activeli"
              activeLinkClass="active"
              linkClassPrev="prev"
              linkClassNext="next"
              prevPageText="<"
              nextPageText='>'
              onChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpertsList;
