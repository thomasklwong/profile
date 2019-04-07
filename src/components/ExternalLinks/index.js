import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query ExternalLinksQuery {
    site {
      siteMetadata {
        author {
          email
          linkedin
          github
        }
      }
    }
  }
`
const ListItemAnchor = ({ href, service }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`icon-${service}`} />
    </a>
  </li>
)

const render = ({
  site: {
    siteMetadata: {
      author: { email, linkedin, github, twitter, rss },
    },
  },
}) => (
  <div>
    <ul>
      <ListItemAnchor href={`mailto:${email}`} service={"mail"} />
      <ListItemAnchor
        href={`https://www.linkedin.com/in/${linkedin}`}
        service={"linkedin"}
      />
      <ListItemAnchor
        href={`https://github.com/${github}`}
        service={"github"}
      />
    </ul>
  </div>
)

const ExternalLinks = () => {
  return <StaticQuery query={query} render={render} />
}

export default ExternalLinks
