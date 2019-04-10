import React from 'react';
import PropTypes from 'prop-types';
import Author from '../Author';
import Nav from '../Nav';
import ExternalLinks from '../ExternalLinks';

const Copyright = () => <small>{'© All rights reserved.'}</small>;

const Sidebar = ({ location }) => {
  return (
    <aside>
      <Author location={location} />
      <Nav />
      <ExternalLinks />
      <Copyright />
    </aside>
  );
};

Sidebar.propTypes = {
  location: PropTypes.object.isRequired
};

export default Sidebar;
