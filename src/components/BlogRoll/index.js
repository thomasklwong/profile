import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';

const BlogRoll = () => {
  const {
    allMarkdownRemark: { edges: projects }
  } = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "project-page" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <div className="columns is-multiline">
      {projects &&
        projects.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter: { title, date },
              excerpt
            }
          }) => (
            <div className="is-parent column is-6" key={id}>
              <article className="tile is-child box notification">
                <p>
                  <Link className="title has-text-primary is-size-4" to={slug}>
                    {title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">{date}</span>
                </p>
                <p>
                  {excerpt}
                  <br />
                  <br />
                  <Link className="button" to={slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          )
        )}
    </div>
  );
};

BlogRoll.propTypes = {};

export default BlogRoll;
