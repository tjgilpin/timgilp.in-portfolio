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
        <span style={{ position: "absolute", right: "10px", top: "10px", zIndex: "100", fontSize: "1.65rem", background: "rgba(0, 0, 0, 0.8)", color: "rgb(255, 255, 255)", width: "2rem", height: "2rem", textAlign: "center", borderRadius: "50%" }}>×</span>
        <div style={{ maxWidth: wrapperstyle + 'px', margin: '0 auto', position: 'relative' }}>
          <Img fluid={imgsize} alt={`Recordstore`} />
        </div>   
      </Link>
    </div>
  </React.Fragment>
)

export default ImagePage