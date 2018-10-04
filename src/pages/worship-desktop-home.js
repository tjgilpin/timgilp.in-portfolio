import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "1600"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#worship" imgsize={data.worshipDesktopHome.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    worshipDesktopHome: file(relativePath: { regex: "/worship-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
