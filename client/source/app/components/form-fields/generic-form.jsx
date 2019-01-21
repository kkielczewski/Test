import React from 'react';
import { Field } from 'redux-form';
import Alert from '../notification/alert';

const GenericForm = ({
  formSpec = [],
  errors = [],
  message = '',
  onSubmit,
  submitText
}) => (
  <form className="form" onSubmit={onSubmit}>
    <Alert errors={errors} icon="error_outline" />
    <Alert message={message} icon="done" />
    <ul className="form-list">
      {formSpec.map(field => <li key={field.id}><Field {...field} /></li>)}
    </ul>
    <button type="submit" className="button is-primary">{submitText}</button><br />
  </form>
);

export default GenericForm;
