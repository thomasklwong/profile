import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent: PageContent = Content
}) => (
  <section>
    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
      {title}
    </h2>
    <PageContent className="content" content={content} />
  </section>
);

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.element,
  title: PropTypes.string.isRequired
};

const AboutPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title }
    }
  }
}) => (
  <Layout>
    <AboutPageTemplate
      content={html}
      contentComponent={HTMLContent}
      title={title}
    />
  </Layout>
);

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
};

export default AboutPage;
