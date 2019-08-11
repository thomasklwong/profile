import React from 'react';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';

const StyledLi = tw.li`my-3`;
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
