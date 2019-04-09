import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Author = ({ location: { pathname } = {} }) => {
  const isRootPage = pathname === "/"
  // eslint-disable-next-line  jsx-a11y/heading-has-content
  const Heading = props => (isRootPage ? <h1 {...props} /> : <h2 {...props} />)

  const {
    site: {
      siteMetadata: {
        author: { name },
      },
    },
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query AuthorQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
      file(relativePath: { eq: "Thomas-Wong.jpg" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <Link to="/">
        <Img
          fixed={fixed}
          alt={name}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Link>
      <Heading>
        <Link to="/">{name}</Link>
      </Heading>
    </div>
  )
}

export default Author