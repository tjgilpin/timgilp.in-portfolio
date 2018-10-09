import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
    <React.Fragment>
      <Helmet title="Tim Gilpin UI/UX Design Portfolio" />
      <Helmet htmlAttributes={{ lang: "en" }} />
      {children}
    </React.Fragment>
  )