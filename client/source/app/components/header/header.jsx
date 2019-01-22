import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  Menu,
  Button,
  Responsive
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
        name: 'Login',
        link: 'login',
        authenticated: false
      },
      {
        name: 'Register',
        link: 'register',
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
        <li className='item' key={link.name}>
          {link.link && <Link to={link.link}>{link.name}</Link>}
          {link.onClick && <a href='javascript:void(null);' onClick={link.onClick}>{link.name}</a>}
        </li>
      ))
    );
  }

  render() {
    const { children } = this.props;
    const redirect = this.state.toSearch ? <Redirect to={{ pathname: '/search', search: `?v=${this.state.searchValue}` }} /> : <div></div>;

    return (
      <div>
        <Responsive minWidth='1021' style={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
        <Menu borderless fixed="top" style={{ flex: 'none', boxShadow: '0px 6px 12px 0px rgba(0,0,0,0.3)' }} >
          <li className='item' key='Home' >
            <Link exact to='/' >Home</Link>
          </li>
          {this.buildNavigation()}
          <Menu.Menu position="right">
          </Menu.Menu>
        </Menu>
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