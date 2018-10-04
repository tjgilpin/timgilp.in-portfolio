import React from 'react'
import Img from 'gatsby-image'
import { Link } from "gatsby"
import Helmet from "react-helmet"

// handleKeyUp = e => {
//   e.preventDefault()
//   const { keyCode } = e
//   if (keyCode === 27) {
//     // Escape key
//     this.setState({ showLightbox: false })
//   }
// }


const ImagePage = ({ linkage, imgsize, wrapperstyle }) => (
  <React.Fragment>
    <Helmet bodyAttributes={{style: "background: #000" }} />
    <div style={{display: 'block'}}>
      <Link to={linkage} replace>
        <div style={{ maxWidth: wrapperstyle + 'px' }}>
          <span style={{ position: "absolute", left: "10px", zIndex: "100", fontSize: "2rem", width: "" }}>×</span>
          <Img fluid={imgsize} alt={`Recordstore`} />
        </div>   
      </Link>
    </div>
  </React.Fragment>
)

export default ImagePage