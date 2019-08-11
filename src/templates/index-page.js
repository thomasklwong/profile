import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

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

const StyledArticle = styled.article`
  & h1 {
    ${tw`text-4xl font-medium leading-loose	mb-8`}
  }

  & p {
    ${tw`leading-relaxed mb-6`}
  }
`;

export const IndexPageTemplate = ({
  content,
  contentComponent: PageContent = Content
}) => (
  <StyledArticle>
    <PageContent className="content" content={content} />
  </StyledArticle>
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
