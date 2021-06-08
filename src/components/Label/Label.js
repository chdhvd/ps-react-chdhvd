import React from 'react';
import Proptypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
function Label({htmlFor, label, required}) {
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      {label}{required && <span style={{color: 'red'}}> *</span> }
    </label>
  )
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: Proptypes.string.isRequired,

  /** Label text */
  label: Proptypes.string.isRequired,

  /** Display asterisk after label if true */
  required: Proptypes.bool
};

export default Label;