import React from 'react';
import './User.scss';

import PropTypes from 'prop-types';

export const User = ({
  name,
}) => (
  <span>
    {'for '}
    <span className="user-name">
      <i>{name}</i>
    </span>
  </span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};
