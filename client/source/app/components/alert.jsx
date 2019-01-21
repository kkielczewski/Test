import React from 'react';

/**
 * Alert  - Standard alert card component
 * @param {Array}   errors  Array containing errors
 * @param {String}  message Message to display
 * @param {String}  icon    Icon to show with alert
 * @returns {Function}
 */
const Alert = ({ errors = [], message = '', icon }) => {
  const alertType = errors && errors.length ? 'errors' : 'message';
  const shouldShow = Boolean((errors && errors.length) || message);

  return (
    <div className={`alert alert-card alert-${alertType} ${shouldShow ? '' : 'is-hidden'}`}>
      <div className={alertType}><i className="material-icons">{icon}</i>
        {(errors && errors.length) &&
          errors.map((error, index) => <span key={index}>{error.error}&nbsp;</span>)
        }
        {message && <span>{message}</span>}
      </div>
    </div>
  );
};

export default Alert;
