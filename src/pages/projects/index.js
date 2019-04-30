import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

const ProjectPage = ({ location }) => (
  <Layout location={location}>
    <section>
      <BlogRoll />
    </section>
  </Layout>
);

ProjectPage.propTypes = {
  location: PropTypes.object.isRequired
};

export default ProjectPage;
