import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TextInput from '../form-fields/text-input';
import GenericForm from '../form-fields/generic-form';
import { login, CHANGE_AUTH } from '../../redux/modules/authentication';
import '../../../styles/authentication.scss';

const form = reduxForm({
  form: 'login'
});

const formSpec = [
  {
    id: 'email',
    name: 'email',
    label: 'User',
    type: 'text',
    placeholder: 'User',
    component: TextInput
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    component: TextInput
  }
];

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    const { desiredPath } = this.props;
    if (desiredPath) {
      this.props.login(formProps, desiredPath);
    } else {
      this.props.login(formProps);
    }
  }

  render() {
    const {
      handleSubmit,
      errors,
      message,
      loading
    } = this.props;

    return (
      <div className={`auth-box ${loading ? 'is-loading' : ''}`}>
        <h1>Login</h1>
        <GenericForm
          onSubmit={handleSubmit(this.handleFormSubmit)}
          errors={errors}
          message={message}
          formSpec={formSpec}
          submitText="Login"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  errors: authentication.errors[CHANGE_AUTH],
  message: authentication.messages[CHANGE_AUTH],
  loading: authentication.loading[CHANGE_AUTH],
  authenticated: authentication.authenticated,
  desiredPath: authentication.desiredPath
});

export default connect(mapStateToProps, { login })(form(Login));
