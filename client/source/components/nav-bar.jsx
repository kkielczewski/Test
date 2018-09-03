import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Responsive, Button } from 'semantic-ui-react';

import miniLogo from '../assets/icons/mini_logo.png';
import Logo from '../assets/icons/logo.png';


class NavBar extends React.Component {
  render() {
    return (
      <Menu color='red' inverted fixed='top' >
        <img src={miniLogo} className='item' style={{ padding: '9px' }} />
        <Menu.Menu position='right' >
          <NavLink className="item" to="/" style={{ padding: '13px 10px' }} >HOME</NavLink>
          <NavLink className="item" to="/video" style={{ padding: '13px 10px' }} >VIDEO</NavLink>
          <NavLink className="item" to="/blog" style={{ padding: '13px 10px' }} >BLOG</NavLink>
          <NavLink className="item" to="/expert" style={{ padding: '13px 10px' }} >EKSPERCI</NavLink>
        </Menu.Menu>
        <div className='socialTab' >
          <a href='https://www.facebook.com/Allecco/'><Button className='navSocialButtonFacebook' circular color='facebook' icon='facebook' /></a>
          <a href='https://www.facebook.com/Allecco/'><Button className='navSocialButtonTwitter' circular color='twitter' icon='twitter' /></a>
          <a href='https://www.facebook.com/Allecco/'><Button className='navSocialButtonInstagram' circular color='instagram' icon='instagram' /></a>
        </div>
      </Menu>
    );
  }
}

export default NavBar;
