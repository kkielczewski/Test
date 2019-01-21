import React from 'react';

const Select = ({
  input,
  children,
  meta,
  id,
  placeholder,
  label = '',
  extraClasses = ''
}) => (
  <label htmlFor={id} className="form-label">
    {label}
    {meta.touched && meta.error && <div className="alert alert-card alert-error">{meta.error}</div>}
    <select
      {...input}
      className={`form-control ${extraClasses && extraClasses}`}
      placeholder={placeholder}
      id={id}
    >
      {children}
    </select>
  </label>
);

export default Select;
