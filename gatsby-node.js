const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const camelcase = require('camelcase');
const decamelize = require('decamelize');

const kebabcase = str => decamelize(camelcase(str), '-');

const queryAllMarkdownDoc = `
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            templateKey
          }
        }
      }
    }
  }
`;

const createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    errors,
    data: {
      allMarkdownRemark: { edges }
    }
  } = await graphql(queryAllMarkdownDoc);

  if (errors) {
    errors.forEach(error => console.error(error));
    return Promise.reject(errors);
  }

  const allTags = [];

  edges.forEach(
    ({
      node: {
        id,
        fields: { slug },
        frontmatter: { tags, templateKey }
      }
    }) => {
      const component = path.resolve(`src/templates/${templateKey}.js`);
      const context = { id, slug };

      // tags can be null sometimes...
      allTags.push(...(tags || []));

      createPage({
        path: slug,
        tags,
        component,
        context
      });
    }
  );

  // unique Tags
  new Set(allTags).forEach(tag => {
    const component = path.resolve(`src/templates/tags.js`);
    const context = { tag };

    createPage({
      path: `/tags/${kebabcase(tag)}/`,
      component,
      context
    });
  });
};

const onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type !== `MarkdownRemark`) {
    return;
  }

  const value = createFilePath({ node, getNode });

  createNodeField({
    name: `slug`,
    node,
    value
  });
};

const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
};

module.exports = {
  createPages,
  onCreateNode,
  onCreateWebpackConfig
};
