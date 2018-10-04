import React from 'react'
import Img from 'gatsby-image'
import { Link } from "gatsby"

const ImagePage = ({ linkage, imgsize, wrapperstyle }) => (
  <div style={{display: 'block'}}>
    <Link to={linkage}>
      {/* <div style={{ position: "relative", margin: "0 auto", width: "360px" }}>
        <span style={{ position: "absolute", left: "10px", zIndex: "100", width: "" }}>×</span>
      </div>    */}
      <Img fluid={imgsize} style={wrapperstyle} alt={`Recordstore`} />
    </Link>
  </div>
)

export default ImagePage