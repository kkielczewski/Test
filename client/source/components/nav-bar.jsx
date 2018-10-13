import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { Menu, Responsive, Button, Icon } from 'semantic-ui-react';
import Sidebar from 'react-sidebar';
import SearchAll from './search-all';
import miniLogo from '../assets/icons/mini_logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      toSearch: false,
      searchValue: null,
      sideClass: '',
      left: '-288px'
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.searchAll = this.searchAll.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  searchAll(value) {
    if (value.length > 1) {
      this.setState({ toSearch: true, searchValue: value, sidebarOpen: false });
    }
  }

  toggleSidebar() {
    if (this.state.sidebarOpen) {
      this.setState({ sidebarOpen: false, sideClass: '' });
    } else {
      this.setState({ sidebarOpen: true, sideClass: 'active' });
    }
  }

  closeSidebar() {
    this.setState({ sidebarOpen: false, sideClass: '' });
    this.scrollToTop();
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { children } = this.props;
    const redirect = this.state.toSearch ? <Redirect to={{ pathname: '/search', search: `?v=${this.state.searchValue}` }} /> : <div></div>;
    const MobileBar = () => (<Menu as={Menu} icon="labeled" vertical className={this.state.sideClass} >
      <SearchAll onSearch={this.searchAll} />
      <NavLink onClick={this.closeSidebar} className= "item" exact to='/' style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }}>HOME</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" exact to="/video" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >VIDEO</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" to="/blog" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >BLOG</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" exact to="/expert" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >EKSPERCI</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" exact to="/sales" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >PROMOCJE</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" exact to="/contests" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >KONKURSY</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" to="/info" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >O NAS</NavLink>
      <NavLink onClick={this.closeSidebar} className="item" to="/contact" style={{ fontSize: '24px', padding: '0.5em 0.8em 0.5em 0.8em' }} >KONTAKT</NavLink>
      </Menu>);
    return (
      <div style={{ height: '100%' }} >
        {redirect}
        <Responsive minWidth='1021' style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
          <Menu borderless fixed='top' style={{ flex: 'none', boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.3)' }}  >
            <div className='navBarContainer' >
            <div className='navSearchBar' >
              <SearchAll onSearch={this.searchAll} />
            </div>
            <img src={miniLogo} className='item' style={{ padding: '9px', float: 'left' }} />
            <div className='socialTab' >
              <a href='//facebook.com/Allecco/'><Button className='navSocialButtonFacebook' icon='facebook' /></a>
              <a href='//instagram.com/allecco_pl/'><Button className='navSocialButtonInstagram' icon='instagram' /></a>
            </div>
            <Menu.Menu position='right' >
              <NavLink onClick={this.scrollToTop} className="item" exact to="/" >HOME</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/video" >VIDEO</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/blog" >BLOG</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/expert" >EKSPERCI</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/sales" >PROMOCJE</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/contests" >KONKURSY</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/info" >O NAS</NavLink>
              <NavLink onClick={this.scrollToTop} className="item" to="/contact" >KONTAKT</NavLink>
            </Menu.Menu>
            </div>
          </Menu>
          {children}
        </Responsive>
        <Responsive maxWidth='1020' >
          <Sidebar transitions={false} touch={false} contentClassName='mainContent' rootClassName='mainRoot' sidebarClassName='mainSidebar' overlayClassName='mainOverlay' sidebar={<MobileBar/>} open={this.state.sidebarOpen} onSetOpen={this.toggleSidebar} >
            <Menu className='mobileNavbar' fixed='top' >
              <Menu.Menu position='left' >
                <Button className='item' onClick={() => {this.toggleSidebar()}} ><Icon name='sidebar' /></Button>
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
