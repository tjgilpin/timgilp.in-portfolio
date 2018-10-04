import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "1600"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#massive" imgsize={data.massiveDesktopHome.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    massiveDesktopHome: file(relativePath: { regex: "/massive-desktop-home/" }) {
      childImageSharp {
        fluid(maxWidth: 3200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
