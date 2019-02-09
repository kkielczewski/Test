import React from 'react';

export default ({ to, onClick, side }) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon arrow arrow-${side}`} aria-label={to}>
    <i class={`fas fa-chevron-${side}`}></i>
  </button>
);
