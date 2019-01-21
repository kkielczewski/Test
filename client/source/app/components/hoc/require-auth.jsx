import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAuthenticatedUser, setPostAuthPath } from '../../redux/modules/authentication';

// List of pre-authention routes, so they aren't saved for a post-auth redirect
const preAuthRoutes = ['/login', '/register', '/reset-password', '/forgot-password'];

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentDidMount() {
      this.ensureAuthentication(this.props.authenticated);
    }

    componentWillUpdate(nextProps) {
      if (this.props.authenticated !== nextProps.authenticated) {
        this.ensureAuthentication(nextProps.authenticated);
      }
    }

    ensureAuthentication(isAuthed) {
      if (!isAuthed) {
        const path = _.get(this.props.match, 'path');

        // Save the user's path for future redirect
        if (path && !preAuthRoutes.includes(path)) {
          this.props.setPostAuthPath(path);
        }

        // Redirect to the login page
        return this.props.history.push('/login');
      }

      return this.props.getAuthenticatedUser();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ authentication }) => ({ authenticated: authentication.authenticated });

  return withRouter(connect(mapStateToProps, { getAuthenticatedUser, setPostAuthPath })(Authentication));
};
