const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const kebabCase = require("kebab-case")

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
            templateKey
          }
        }
      }
    }
  }
`

const createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    errors,
    data: {
      allMarkdownRemark: { edges },
    },
  } = await graphql(queryAllMarkdownDoc)

  if (errors) {
    errors.forEach(error => console.error(error))
    return Promise.reject(errors)
  }

  edges.forEach(
    ({
      node: {
        id,
        fields: { slug },
        frontmatter: { templateKey },
      },
    }) => {
      const component = path.resolve(`src/templates/${templateKey}.js`)
      const context = { id, slug }

      createPage({
        path: slug,
        component,
        context,
      })
    }
  )
}

const onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type !== `MarkdownRemark`) {
    return
  }

  const value = createFilePath({ node, getNode })

  createNodeField({
    name: `slug`,
    node,
    value,
  })
}

module.exports = {
  createPages,
  onCreateNode,
}
