import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "320"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#beatles" imgsize={data.beatlesMobileHome.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    beatlesMobileHome: file(relativePath: { regex: "/beatles-mobile-home/" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
