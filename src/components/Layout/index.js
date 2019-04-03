import React from "react"
import Sidebar from "../Sidebar"

const Layout = ({ children, location }) => {
  return (
    <React.Fragment>
      <Sidebar location={location} />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
