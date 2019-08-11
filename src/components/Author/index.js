import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import { ClassNames } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledH1 = styled.h1`
  ${tw`text-lg font-medium leading-relaxed my-3`}
`;

const Author = ({ location: { pathname } = {} }) => {
  const isRootPage = pathname === '/';

  const Heading = props =>
    // eslint-disable-next-line  jsx-a11y/heading-has-content
    isRootPage ? <StyledH1 {...props} /> : <h2 {...props} />;

  const {
    site: {
      siteMetadata: {
        author: { name }
      }
    },
    file: {
      childImageSharp: { fixed }
    }
  } = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
      file(relativePath: { eq: "Thomas-Wong.jpg" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div>
      <Link to="/">
        <ClassNames>
          {({ css, cx }) => (
            <Img
              alt={name}
              className={css`
                ${tw`rounded-full`}
              `}
              fadeIn={false}
              fixed={fixed}
              title={name}
            />
          )}
        </ClassNames>
      </Link>
      <Heading>
        <Link to="/">{name}</Link>
      </Heading>
    </div>
  );
};

Author.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default Author;
