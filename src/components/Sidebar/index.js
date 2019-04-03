import React from "react"
import Author from "../Author"

const Nav = () => <nav />
const Contact = () => <p />
const Copyright = () => <small>{"© All rights reserved."}</small>

const Sidebar = ({ location }) => {
  return (
    <aside>
      <Author location={location} />
      <Nav />
      <Contact />
      <Copyright />
    </aside>
  )
}

export default Sidebar
