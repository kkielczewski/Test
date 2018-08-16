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
    const className = 'item level' + this.props.level;
    const link = '/doctor/' + this.props.person.id;
    return (
      <div className={className}>
        <div className="container">
          <img src={Avatar} alt="Portret" className="portrait" />
          {this.props.person.id}
        </div>
        <div className="middle" >
          <NavLink to={link} className="button" >Details</NavLink>
        </div>
      </div>
    );
  }
}

export default CarouselSlot;
