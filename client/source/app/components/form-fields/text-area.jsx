import React from 'react';

const Textarea = ({
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
    <textarea
      {...input}
      id={id}
      placeholder={placeholder}
      className={`form-control ${extraClasses && extraClasses}`}
    />
  </label>
);


export default Textarea;
