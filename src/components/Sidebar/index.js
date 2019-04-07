import React from "react"
import Author from "../Author"
import Nav from "../Nav"
import ExternalLinks from "../ExternalLinks"

const Copyright = () => <small>{"© All rights reserved."}</small>

const Sidebar = ({ location }) => {
  return (
    <aside>
      <Author location={location} />
      <Nav />
      <ExternalLinks />
      <Copyright />
    </aside>
  )
}

export default Sidebar
