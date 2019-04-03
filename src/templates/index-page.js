import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// NOTE: Using multiple `export const` as Gatsby has issue with
// grouping multiple export
// See https://github.com/gatsbyjs/gatsby/issues/8609
export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        description
      }
    }
  }
`
export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  description,
}) => (
  <article>
    <h1>title</h1>
    <h2>heading</h2>
    <h3>subheading</h3>
    <p>description</p>
  </article>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const IndexPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, heading, subheading, description },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <IndexPageTemplate
      title={title}
      heading={heading}
      subheading={subheading}
      description={description}
    />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        ...IndexPageTemplate.propTypes,
      }),
    }),
  }),
}

export default IndexPage
