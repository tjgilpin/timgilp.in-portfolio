import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "1840"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#recordstore" imgsize={data.recordstoreDesktopHome.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    recordstoreDesktopHome: file(relativePath: { regex: "/recordstore-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 1840) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }  
`
