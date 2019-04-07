import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ListItemAnchor = ({ href, service }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`icon-${service}`} />
    </a>
  </li>
)

const ExternalLinks = () => {
  const {
    site: {
      siteMetadata: {
        author: { email, linkedin, github },
      },
    },
  } = useStaticQuery(graphql`
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
  `)

  return (
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
}

export default ExternalLinks
