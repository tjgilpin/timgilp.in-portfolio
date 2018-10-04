import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

// Note: set same maxwidth for both imageMaxWidth and sizes(maxwidth: )

const imageStyle = {
  maxWidth: '360px',
  margin: '0 auto',
}

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#recordstore" imgsize={data.recordstoreMobileProduct.childImageSharp.fluid} wrapperstyle={imageStyle} />
)

export default IndexPage

export const query = graphql`
  query {
    recordstoreMobileProduct: file(relativePath: { regex: "/recordstore-mobile-product-2x/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
