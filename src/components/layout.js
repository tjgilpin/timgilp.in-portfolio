import React from "react"
import Helmet from "react-helmet"

export default ({ children }) => (
    <React.Fragment>
      <Helmet>
        <title>Tim Gilpin UI/UX Design Portfolio</title>
        <html lang="en" />
        <html style="background: rgb(20, 25, 30)" />
        <meta
          name="description"
          content="Tim Gilpin UI/UX Design Portfolio - Recordstore, Brentwood Benson, Universal Music Group, The Beatles, Worship Charts and Massive Attack"
        />
      </Helmet>
      {children}
    </React.Fragment>
  )