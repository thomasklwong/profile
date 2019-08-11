import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import tw from 'tailwind.macro';
import { ReactComponent as Email } from '../../icons/icon-email.svg';
import { ReactComponent as Github } from '../../icons/icon-github.svg';
import { ReactComponent as Linkedin } from '../../icons/icon-linkedin.svg';

const StyledUL = tw.ul`flex -ml-1`;
const StyledLI = tw.li`mx-1 h-6 w-6 bg-gray-200 rounded flex items-center justify-center`;

const ListItemAnchor = ({ href, Icon }) => {
  const StyledIcon = tw(Icon)`w-4 h-4`;
  return (
    <StyledLI>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <StyledIcon />
      </a>
    </StyledLI>
  );
};

ListItemAnchor.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired
};

const ExternalLinks = () => {
  const {
    site: {
      siteMetadata: {
        author: { email, linkedin, github }
      }
    }
  } = useStaticQuery(graphql`
    query ExternalLinksQuery {
      site {
        siteMetadata {
          author {
            email
            linkedin
            github
          }
        }
      }
    }
  `);

  return (
    <div>
      <StyledUL>
        <ListItemAnchor Icon={Email} href={`mailto:${email}`} />
        <ListItemAnchor
          Icon={Linkedin}
          href={`https://www.linkedin.com/in/${linkedin}`}
        />
        <ListItemAnchor Icon={Github} href={`https://github.com/${github}`} />
      </StyledUL>
    </div>
  );
};

export default ExternalLinks;
