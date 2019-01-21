import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../assets/images/avatarPlaceholder.png';

class CarouselSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level
    };
  }

  render() {
    const className = 'carouselItem level' + this.props.level;
    const link = '/doctor/' + this.props.person.id;
    return (
      <div className={className}>
        <NavLink to={link} className="container">
          <img src={Avatar} alt="Portret" className="portrait" />
          {this.props.person.id}
        </NavLink>
      </div>
    );
  }
}

export default CarouselSlot;
