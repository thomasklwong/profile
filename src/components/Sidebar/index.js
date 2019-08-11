import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

import Author from '../Author';
import Nav from '../Nav';
import ExternalLinks from '../ExternalLinks';

const Aside = styled.aside`
  ${tw`w-full p-5 md:w-2/5 lg:w-1/3 md:mr-6`};
`;

const Copyright = () => <small>{'© All rights reserved.'}</small>;

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
