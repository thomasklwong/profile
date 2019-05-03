import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Layout from '../components/Layout';

export const query = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;

const ProjectPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date, description }
    }
  }
}) => (
  <Layout>
    <div>{title}</div>
    <div>{date}</div>
    <div>{description}</div>
  </Layout>
);

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    })
  })
};

export default ProjectPage;
