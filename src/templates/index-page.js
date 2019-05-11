import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

// NOTE: Using multiple `export const` as Gatsby has issue with
// grouping multiple export
// See https://github.com/gatsbyjs/gatsby/issues/8609
export const query = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
    }
  }
`;

export const IndexPageTemplate = ({
  content,
  contentComponent: PageContent = Content
}) => (
  <article>
    <PageContent className="content" content={content} />
  </article>
);

IndexPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const IndexPage = ({
  data: {
    markdownRemark: { html }
  },
  location
}) => (
  <Layout location={location}>
    <IndexPageTemplate content={html} contentComponent={HTMLContent} />
  </Layout>
);

IndexPage.propTypes = {
  data: shape({
    markdownRemark: shape({
      html: PropTypes.string,
      frontmatter: shape({
        ...IndexPageTemplate.propTypes
      })
    })
  }),
  location: PropTypes.object.isRequired
};

export default IndexPage;
