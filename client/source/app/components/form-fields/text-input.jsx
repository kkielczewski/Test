import React from 'react';

const TextInput = ({
  input,
  meta,
  id,
  placeholder,
  type,
  label = '',
  extraClasses = ''
}) => (
  <label htmlFor={id} className="form-label">
    {label}
    {meta.touched && meta.error && <div className="alert alert-card alert-error">{meta.error}</div>}
    <input
      {...input}
      id={id}
      className={`form-control ${extraClasses}`}
      placeholder={placeholder}
      type={type}
    />
  </label>
);

export default TextInput;
