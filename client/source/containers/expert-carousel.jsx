import React from 'react';
import { Header, Responsive } from 'semantic-ui-react';
import Slider from 'react-slick';
import Pagination from 'react-js-pagination';
import DoctorCard from '../components/doctor-card';


class ExpertCarousel extends React.Component {
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
    const experts = [{ link: '/expert/1', thumbnail: '' },
      { link: '/expert/2', thumbnail: '' },
      { link: '/expert/3', thumbnail: '' },
      { link: '/expert/4', thumbnail: '' },
      { link: '/expert/5', thumbnail: '' },
      { link: '/expert/6', thumbnail: '' },
      { link: '/expert/7', thumbnail: '' }];

    this.setState({ allExperts: experts, currentExperts: experts.slice(0, 4), totalCount: 7 });
  }

  handlePageChange(pageNumber) {
    const offset = (pageNumber - 1) * 4;
    const currentItems = this.state.allExperts.slice(offset, offset + 4);
    this.setState({ activePage: pageNumber, currentExperts: currentItems });
  }

  render() {
    const expertSettings = {
      className: 'expertCarousel',
      centerMode: true,
      infinite: true,
      centerPadding: '0px',
      slidesToShow: 5,
      speed: 300,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 2170,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1420,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    };
    return (
      <div className='whiteContainer' >
        <div className='background whiteExpert' />
        <Header className='recomendedProducts expertHeader' textAlign='center' size='huge' >Wybierz swojego eksperta</Header>
        <Responsive minWidth='1021' >
          <Slider {...expertSettings} >
            {this.state.allExperts.map(expert => <DoctorCard contentClass='expertContent' imageClass='Image' link={expert.link} />)}
          </Slider>
        </Responsive>
        <Responsive maxWidth='1020' >
          <div className='homeExpertsContainer' >
            <div className='homeExperts' >
              {this.state.currentExperts.map(expert => <DoctorCard contentClass='expertContent' imageClass='Image' link={expert.link} />)}
              <div className='videoNav' >
                <Pagination
                hideFirstLastPages
                activePage={this.state.activePage}
                itemsCountPerPage={4}
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
        </Responsive>
      </div>
    );
  }
}

export default ExpertCarousel;
