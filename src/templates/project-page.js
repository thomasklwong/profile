import React from 'react';
import PropTypes, { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import camelcase from 'camelcase';
import decamelize from 'decamelize';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const kebabcase = str => decamelize(camelcase(str), '-');

export const query = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "dddd, D MMMM Y, h:mm:ss a")
        description
        tags
      }
    }
  }
`;

export const ProjectPageTemplate = ({
  content,
  contentComponent: PageContent = Content,
  date,
  description,
  tags,
  title,
  helmet
}) => (
  <article>
    <helmet />
    <h1>{title}</h1>
    <p>{date}</p>
    <p>{description}</p>
    <PageContent content={content} />
    {tags?.length ? (
      <section>
        <h4>Tags</h4>
        <ul>
          {tags.map(kebabcase).map(tag => (
            <li key={`tag-${tag}`}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </section>
    ) : null}
  </article>
);

ProjectPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  helmet: PropTypes.node.isRequired,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired
};

const ProjectPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, description, tags }
    }
  }
}) => (
  <Layout>
    <ProjectPageTemplate
      content={html}
      contentComponent={HTMLContent}
      date={date}
      description={description}
      helmet={() => {}}
      tags={tags}
      title={title}
    />
  </Layout>
);

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({})
  })
};

export default ProjectPage;
