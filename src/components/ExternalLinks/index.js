import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ReactComponent as Email } from '../../icons/icon-email.svg';
import { ReactComponent as Github } from '../../icons/icon-github.svg';
import { ReactComponent as Linkedin } from '../../icons/icon-linkedin.svg';

const ListItemAnchor = ({ href, Icon }) => (
  <li>
    <a href={href} rel="noopener noreferrer" target="_blank">
      <Icon className="w-4 h-4" />
    </a>
  </li>
);

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
      <ul>
        <ListItemAnchor Icon={Email} href={`mailto:${email}`} />
        <ListItemAnchor
          Icon={Linkedin}
          href={`https://www.linkedin.com/in/${linkedin}`}
        />
        <ListItemAnchor Icon={Github} href={`https://github.com/${github}`} />
      </ul>
    </div>
  );
};

export default ExternalLinks;
