import React from 'react'
import ImagePage from '../components/imagepage'
import { graphql } from "gatsby"

const imageWrapper = "600"

const IndexPage = ({ data }) => (
  <ImagePage linkage="./#bbmp" imgsize={data.bbmpTabletXmas.childImageSharp.fluid} wrapperstyle={imageWrapper} />
)

export default IndexPage

export const query = graphql`
  query {
    bbmpTabletXmas: file(relativePath: { regex: "/bbmp-tablet-xmas-search/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }  
`
