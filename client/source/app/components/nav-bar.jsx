import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  Menu,
  Sidebar,
  Responsive
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getAuthenticatedUser } from '../redux/modules/user';
import { logoutUser } from '../redux/modules/authentication';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handlePusher() {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  }

  handleToggle() {
    this.setState({ visible: !this.state.visible });
  }

  buildNavigation() {
    const links = [
      {
        name: 'Video',
        link: 'video',
        authenticated: false
      },
      {
        name: 'Articles',
        link: 'blog',
        authenticated: false
      },
      {
        name: 'Experts',
        link: 'expert',
        authenticated: false
      },
      {
        name: 'Info',
        link: 'info',
        authenticated: false
      },
      {
        name: 'Contact',
        link: 'contact',
        authenticated: false
      },
      {
        name: 'Contests',
        link: 'contests',
        authenticated: false
      },
      {
        name: 'Sales',
        link: 'sales',
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
        link: 'homecontests',
        authenticated: true
      },
      {
        name: 'Articles',
        link: 'articles',
        authenticated: true
      },
      {
        name: 'Videos',
        link: 'videos',
        authenticated: true
      },
      {
        name: 'Experts',
        link: 'experts',
        authenticated: true
      },
      {
        name: 'Contests',
        link: 'contests',
        authenticated: true
      },
      {
        name: 'Contests Winners',
        link: 'winners',
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
    const { visible } = this.state;

    return (
      <div>
        <Responsive maxWidth={Responsive.onlyTablet.minWidth} >
            <Sidebar as={Menu} animation="overlay" width='thin' icon="labeled" inverted vertical visible={visible} >
              <li className='item' key='Home' >
                <Link exact to='/' >Home</Link>
              </li>
              {this.buildNavigation()}
            </Sidebar>
            <Menu fixed="top" inverted>
              <Menu.Item onClick={this.handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Menu position="right">
              </Menu.Menu>
            </Menu>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Menu fixed="top" inverted>
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

export default connect(mapStateToProps, { logoutUser })(NavBar);
