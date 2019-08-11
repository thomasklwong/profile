import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledLi = styled.li`
  ${tw`my-3`}
`;

const Nav = () => {
  return (
    <nav>
      <ul>
        <StyledLi>
          <Link to="/">About Me</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/projects">Projects</Link>
        </StyledLi>
      </ul>
    </nav>
  );
};

export default Nav;
