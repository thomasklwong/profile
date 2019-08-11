import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Author from '../Author';
import Nav from '../Nav';
import ExternalLinks from '../ExternalLinks';

const Aside = styled.aside`
  ${tw`w-full p-5 md:w-1/5 md:mr-6`}

  ::after {
    content: '';
    position: relative;
    display: block;
    left: calc(100% + 1.125rem);
    top: calc(-100% + 32rem - 1.25rem);
    width: 1px;
    height: 32rem;
    background: linear-gradient(to bottom, white 0, #e6e6e6 48%, white 100%);
  }
`;

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
