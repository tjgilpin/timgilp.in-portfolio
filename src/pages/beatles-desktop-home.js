import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "1680"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#beatles" imgsize={data.beatlesDesktopHome.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    beatlesDesktopHome: file(relativePath: { regex: "/beatles-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 1680) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }  
`
