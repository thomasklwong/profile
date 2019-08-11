import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

const StyledMain = tw.main`md:w-3/5 lg:w-2/3`;
const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
