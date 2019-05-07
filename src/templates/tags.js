import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export const query = graphql`
  query TagPage($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const TagRoute = ({
  pageContext: { tag },
  data: {
    site: {
      siteMetadata: { title }
    },
    allMarkdownRemark: { totalCount, edges }
  }
}) => (
  <Layout>
    <Helmet title={`${title}`} />
    <section>
      <h3>{`${totalCount} page${totalCount === 1 ? '' : 's'} with ${tag}`}</h3>
      <ul>
        {edges.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

TagRoute.propTypes = {
  data: shape({
    site: shape({
      siteMetadata: shape({ title: PropTypes.string })
    }),
    allMarkdownRemark: shape({
      totalCount: PropTypes.number,
      edges: PropTypes.arrayOf(
        shape({
          fields: shape({ slug: PropTypes.string }),
          frontmatter: shape({ title: PropTypes.string })
        })
      )
    })
  }),
  pageContext: shape({ tag: PropTypes.string })
};

export default TagRoute;
