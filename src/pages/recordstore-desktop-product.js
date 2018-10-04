import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "1840"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#recordstore" imgsize={data.recordstoreDesktopProduct.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    recordstoreDesktopProduct: file(relativePath: { regex: "/recordstore-desktop-product/" }) {
      childImageSharp {
        fluid(maxWidth: 1840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
