import React from 'react';
import PropTypes from 'prop-types';

import ArrowDown from './ArrowDown';
import Lock from './Lock';

const icons = {
  ArrowDown,
  Lock,
};
const Icon = (props) => {
  const Specification = icons[props.name];
  if (Specification) {
    return <Specification {...props} />;
  }
  console.warn(`There is no icon for ${props.name}`);
  return null;
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Icon;
