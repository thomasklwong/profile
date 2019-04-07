import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const query = graphql`
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
`

const Author = ({ location: { pathname } = {} }) => {
  const isRootPage = pathname === "/"
  // eslint-disable-next-line  jsx-a11y/heading-has-content
  const Heading = props => (isRootPage ? <h1 {...props} /> : <h2 {...props} />)

  const render = ({
    site: {
      siteMetadata: {
        author: { name },
      },
    },
    file: {
      childImageSharp: { fixed },
    },
  }) => (
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

  return <StaticQuery query={query} render={render} />
}

export default Author
