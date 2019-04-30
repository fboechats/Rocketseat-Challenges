import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { children, className } = props;
  return <header className={className}>{children}</header>;
};

Header.defaultProps = {
  children: 'RocketBook',
  className: 'Header',
};

Header.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
