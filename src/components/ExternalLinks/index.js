import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const ListItemAnchor = ({ href, service }) => (
  <li>
    <a href={href} rel="noopener noreferrer" target="_blank">
      <i className={`icon-${service}`} />
    </a>
  </li>
);

ListItemAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired
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
        <ListItemAnchor href={`mailto:${email}`} service={'mail'} />
        <ListItemAnchor
          href={`https://www.linkedin.com/in/${linkedin}`}
          service={'linkedin'}
        />
        <ListItemAnchor
          href={`https://github.com/${github}`}
          service={'github'}
        />
      </ul>
    </div>
  );
};

export default ExternalLinks;
