import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  Menu,
  Button,
  Responsive
} from 'semantic-ui-react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SearchAll from '../search-all';
import miniLogo from '../../assets/icons/mini_logo.png';
import { getAuthenticatedUser } from '../../redux/modules/user';
import { logoutUser } from '../../redux/modules/authentication';

class Header extends Component {
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

  buildNavigation() {
    const links = [
      {
        name: 'VIDEO',
        link: 'video',
        authenticated: false
      },
      {
        name: 'BLOG',
        link: 'blog',
        authenticated: false
      },
      {
        name: 'EKSPERCI',
        link: 'expert',
        authenticated: false
      },
      {
        name: 'PROMOCJE',
        link: 'sales',
        authenticated: false
      },
      {
        name: 'KONKURSY',
        link: 'contests',
        authenticated: false
      },
      {
        name: 'O NAS',
        link: 'info',
        authenticated: false
      },
      {
        name: 'KONTAKT',
        link: 'contact',
        authenticated: false
      },
      {
        name: 'Home Page Contests',
        link: 'cms_homecontests',
        authenticated: true
      },
      {
        name: 'Articles',
        link: 'cms_articles',
        authenticated: true
      },
      {
        name: 'Videos',
        link: 'cms_videos',
        authenticated: true
      },
      {
        name: 'Experts',
        link: 'cms_experts',
        authenticated: true
      },
      {
        name: 'Contests',
        link: 'cms_contests',
        authenticated: true
      },
      {
        name: 'Contests Winners',
        link: 'cms_winners',
        authenticated: true
      },
      {
        name: 'Sign out',
        onClick: this.props.logoutUser,
        authenticated: true
      }
    ];

    return (
      links.filter(link => link.authenticated === this.props.authenticated).map(link => (
        <NavLink className='item' to={link.link} onClick={this.scrollToTop} >{link.name}</NavLink>
      ))
    );
  }

  render() {
    const { children } = this.props;
    const redirect = this.state.toSearch ? <Redirect to={{ pathname: '/search', search: `?p=${this.state.searchValue}` }} /> : <div></div>;
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
        <Menu borderless fixed="top" style={{ flex: 'none', boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.3)' }} >
          <div className='navBarContainer' >
            <div className='navSearchBar' >
              <SearchAll onSearch={this.searchAll} />
            </div>
            <img src={miniLogo} className='item' style={{ padding: '9px', float: 'left' }} />
            <div className='socialTab' >
              <a href='//facebook.com/Allecco'><Button className='navSocialButtonFacebook' icon='facebook'/></a>
              <a href='//instagram.com/allecco_pl'><Button className='navSocialButtonInstagram' icon='instagram'/></a>
            </div>
            <Menu.Menu position='right'>
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className='item' exact to='/' >HOME</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className='item' to='/video' >VIDEO</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/blog" >BLOG</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/expert" >EKSPERCI</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/sales" >PROMOCJE</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/contests" >KONKURSY</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/info" >O NAS</NavLink>}
              {!this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/contact" >KONTAKT</NavLink>}
              {this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/cms_homecontests" >Home Page Contests</NavLink>}
              {this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/cms_articles" >Articles</NavLink>}
              {this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/cms_videos" >Videos</NavLink>}
              {this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/cms_experts" >Experts</NavLink>}
              {this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/cms_contests" >Contests</NavLink>}
              {this.props.authenticated && <NavLink onClick={this.scrollToTop} className="item" to="/cms_winners" >Contests Winners</NavLink>}
              {this.props.authenticated && <a className='item' href='javascript:void(null);' onClick={this.props.logoutUser}>Log Out</a>}
            </Menu.Menu>
          </div>
        </Menu>
        {children}
        </Responsive>
        <Responsive maxWidth='1020' >
          <Sidebar transitions={false} touch={false} contentClassName='mainContent' rootClassName='mainRoot' sidebarClassName='mainSidebar' overlayClassName='mainOverlay' sidebar={<MobileBar/>} open={this.state.sidebarOpen} onSetOpen={this.toggleSidebar} >
            <Menu className='mobileNavbar' fixed='top' >
              <Menu.Menu position='left' >
                <Button className='item' onClick={() => { this.toggleSidebar(); }} ><Icon name='sidebar' /></Button>
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

const mapStateToProps = ({ user, authentication }) => ({
  user: getAuthenticatedUser({ user, authentication }),
  authenticated: authentication.authenticated
});

export default connect(mapStateToProps, { logoutUser })(Header);
