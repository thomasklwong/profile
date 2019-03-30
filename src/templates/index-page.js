import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

const IndexPageTemplate = ({ title, heading, subheading, description }) => {
  return (
    <article>
      <h1>{title}</h1>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <section>{description}</section>
    </article>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const IndexPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => {
  const { title, heading, subheading, description } = frontmatter

  return (
    <Layout>
      <IndexPageTemplate
        title={title}
        heading={heading}
        subheading={subheading}
        description={description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        ...IndexPageTemplate.propTypes,
      }),
    }),
  }),
}

const pageQuery = graphql`
  query IndexPageTemplate {
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

export { IndexPageTemplate, pageQuery }

export default IndexPage
