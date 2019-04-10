import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Sidebar location={location} />
      <main>{children}</main>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
