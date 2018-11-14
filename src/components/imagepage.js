import React from 'react'
import Img from 'gatsby-image'
import { Link } from "gatsby"
import "tachyons"
import "../css/additional.css"
require("typeface-roboto")

const ImagePage = ({ linkage, imgsize, wrapperstyle }) => (
  <React.Fragment>
    <div style={{display: 'block'}}>
      <Link to={linkage}>
        <span style={{ position: "fixed", right: "10px", top: "10px", zIndex: "100", fontSize: "1.2rem", fontWeight: "300", background: "rgba(0, 0, 0, 0.8)", color: "rgb(255, 255, 255)", width: "2rem", height: "2rem", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>×</span>
        <div style={{ maxWidth: wrapperstyle + 'px', margin: '0 auto', position: 'relative' }}>
          <Img fluid={imgsize} alt={`Recordstore`} />
        </div>   
      </Link>
    </div>
  </React.Fragment>
)

export default ImagePage