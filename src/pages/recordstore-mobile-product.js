import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"



const imageStyle = "720"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#recordstore" imgsize={data.recordstoreMobileProduct.childImageSharp.fluid} wrapperstyle={imageStyle} />
)

export default IndexPage

export const query = graphql`
  query {
    recordstoreMobileProduct: file(relativePath: { regex: "/recordstore-mobile-product-2x/" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
