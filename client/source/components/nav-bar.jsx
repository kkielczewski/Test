import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Responsive, Button, Sidebar as Side, Icon, Image, Container } from 'semantic-ui-react';
import Sidebar from 'react-sidebar';

import miniLogo from '../assets/icons/mini_logo.png';
import Logo from '../assets/icons/logo.png';

const MobileBar = () => (<Menu as={Menu} icon="labeled" vertical style={{ width: '270px', height: '100%', overflow: 'auto', paddingRight: '15px', boxSizing: 'content-box' }}>
  <NavLink className= "item" exact to='/' style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }}>HOME</NavLink>
  <NavLink className="item" to="/video" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >VIDEO</NavLink>
  <NavLink className="item" to="/blog" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >BLOG</NavLink>
  <NavLink className="item" to="/expert" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >EKSPERCI</NavLink>
  <a className="item" href="//allecco.pl" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >SKLEP</a>
  <NavLink className="item" to="/info" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >O NAS</NavLink>
  <NavLink className="item" to="/contact" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >KONTAKT</NavLink>
  </Menu>);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    const { children } = this.props;
    return (
      <div style={{ height: '100%' }} >
        <Responsive minWidth='769' style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
          <Menu borderless fixed='top' style={{ flex: 'none' }}  >
            <div className='navBarContainer' >
            <div style={{ height: '53px' }} ></div>
            <img src={miniLogo} className='item' style={{ padding: '9px', float: 'left' }} />
            <div className='socialTab' >
              <a href='//facebook.com/Allecco/'><Button className='navSocialButtonFacebook' circular color='facebook' icon='facebook' /></a>
              <a href='//instagram.com/allecco_pl/'><Button className='navSocialButtonInstagram' circular color='instagram' icon='instagram' /></a>
            </div>
            <Menu.Menu position='right' >
              <NavLink className="item" to="/" style={{ padding: '13px 10px' }} >HOME</NavLink>
              <NavLink className="item" to="/video" style={{ padding: '13px 10px' }} >VIDEO</NavLink>
              <NavLink className="item" to="/blog" style={{ padding: '13px 10px' }} >BLOG</NavLink>
              <NavLink className="item" to="/expert" style={{ padding: '13px 10px' }} >EKSPERCI</NavLink>
              <a className="item" href="//allecco.pl" style={{ padding: '13px 10px' }} >SKLEP</a>
              <NavLink className="item" to="/info" style={{ padding: '13px 10px' }} >O NAS</NavLink>
              <NavLink className="item" to="/contact" style={{ padding: '13px 10px' }} >KONTAKT</NavLink>
            </Menu.Menu>
            </div>
          </Menu>
          {children}
        </Responsive>
        <Responsive maxWidth='768' >
          <Sidebar contentClassName='mainContent' rootClassName='mainRoot' sidebarClassName='mainSidebar' overlayClassName='mainOverlay' sidebar={<MobileBar/>} open={this.state.sidebarOpen} onSetOpen={this.onSetSidebarOpen} styles={{ sidebar: { background: 'white' } }}>
            <Menu className='mobileNavbar' fixed='top' >
              <Menu.Menu position='left' >
                <Button className='item' onClick={() => {this.onSetSidebarOpen(true)}} ><Icon name='sidebar' /></Button>
              </Menu.Menu>
              <img src={miniLogo} className='item' />
            </Menu>
            {children}
          </Sidebar>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
