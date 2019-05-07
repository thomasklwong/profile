import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import kebabcase from '../../utils/kebab-case';
import Layout from '../../components/Layout';

export const query = graphql`
  query TagsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title = '' }
    }
  }
}) => (
  <Layout>
    <article>
      <Helmet title={`Tags | ${title}`} />
      <h1>Tags</h1>
      <ul>
        {group
          .map(({ fieldValue, totalCount }) => ({
            path: `${kebabcase(fieldValue)}`,
            text: `${fieldValue} (${totalCount})`
          }))
          .map(({ path, text }) => (
            <li key={path}>
              <Link to={`/tags/${path}`}>{text}</Link>
            </li>
          ))}
      </ul>
    </article>
  </Layout>
);

TagsPage.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      group: PropTypes.array
    }),
    site: shape({
      siteMetadata: shape({
        title: PropTypes.string
      })
    })
  })
};

export default TagsPage;
