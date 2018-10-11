import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "360"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#recordstore" imgsize={data.recordstoreMobileProduct.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    recordstoreMobileProduct: file(relativePath: { regex: "/recordstore-mobile-product/" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }  
`
