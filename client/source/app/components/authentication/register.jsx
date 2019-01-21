import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import TextInput from '../form-fields/text-input';
import GenericForm from '../form-fields/generic-form';
import { register, CHANGE_AUTH } from '../../redux/modules/authentication';
import '../../../styles/authentication.scss';

const form = reduxForm({
  form: 'register'
});

const formSpec = [
  {
    id: 'email',
    name: 'email',
    label: 'User',
    type: 'text',
    placeholder: 'you@yourdomain.com',
    component: TextInput
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '********',
    component: TextInput
  },
  {
    id: 'passwordConfirm',
    name: 'passwordConfirm',
    label: 'Confirm Password',
    type: 'password',
    placeholder: '********',
    component: TextInput
  }
];

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formProps) {
    this.props.register(formProps);
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
        <h1>Register</h1>
        <GenericForm
          onSubmit={handleSubmit(this.handleFormSubmit)}
          errors={errors}
          message={message}
          formSpec={formSpec}
          submitText="Register"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  errors: authentication.errors[CHANGE_AUTH],
  message: authentication.messages[CHANGE_AUTH],
  loading: authentication.loading[CHANGE_AUTH],
  authenticated: authentication.authenticated
});

export default connect(mapStateToProps, { register })(form(Register));
