import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "1280"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#bbmp" imgsize={data.bbmpDesktopHome.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    bbmpDesktopHome: file(relativePath: { regex: "/bbmp-desktop-no-carousel/" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
