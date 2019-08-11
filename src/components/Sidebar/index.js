import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

import Author from '../Author';
import Nav from '../Nav';
import ExternalLinks from '../ExternalLinks';

const Aside = tw.aside`w-full p-5 md:w-1/5 md:mr-6`;
const StyledSmall = tw.small`block mt-10 text-gray-500`;
const Copyright = () => <StyledSmall>{'© All rights reserved.'}</StyledSmall>;

const Sidebar = ({ location }) => {
  return (
    <Aside>
      <Author location={location} />
      <Nav />
      <ExternalLinks />
      <Copyright />
    </Aside>
  );
};

Sidebar.propTypes = {
  location: PropTypes.object.isRequired
};

export default Sidebar;
